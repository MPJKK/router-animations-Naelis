import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/login';
import {Router} from '@angular/router';
import {UploadComponent} from '../upload/upload.component';


@Injectable()
export class MediaService {

    apiUrl = 'http://media.mw.metropolia.fi/wbma';
    mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

    constructor(private router: Router, private http: HttpClient) {
    }

    getAllMedia() {
        return this.http.get(this.apiUrl + '/media');
    }

    newUser(user) {
        return this.http.post(this.apiUrl + '/users', user);
    }

    login(user) {
        this.http.post<Login>(this.apiUrl + '/login', user).subscribe(response => {
            console.log(response);
            localStorage.setItem('token', response.token);
            this.router.navigate(['front']);
            // homma ok -> fronttiin
        }, (error: HttpErrorResponse) => {
            console.log(error);
            // homma kusee -> loginiin
            this.router.navigate(['login']);
        });
    }

    getUserData(token) {
        const options = {
            headers: new HttpHeaders().set('x-access-token', token),
        };
        return this.http.get(this.apiUrl + '/users/user', options);
    }

    uploadFile (fd, token) {
        const options = {
            headers: new HttpHeaders().set('x-access-token', token),
        };
        return this.http.post(this.apiUrl + '/media', fd, options);
    }
}
