import {Component, OnInit} from '@angular/core';
import {Media} from '../models/media';
import {HttpErrorResponse} from '@angular/common/http';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    file = new Media('', '');
    formData = new FormData();

    constructor(private mediaService: MediaService, private router: Router) {
    }

    setFile(evt) {
        // console.log(evt);
        // console.log(evt.target.files[0].name);
        // .target.files[0].name
        const file: File = evt.target.files[0];
        this.formData.append('file', evt.target.files[0], evt.target.files[0].name);
        // console.log(this.file.title);
        // console.log(this.file.description);
        console.log(this.file.title, evt.target.files[0], evt.target.files[0].name);


    }

    upload() {
        this.formData.append('title', this.file.title);
        this.formData.append('description', this.file.description);
        console.log(this.formData);

        this.mediaService.uploadFile(this.formData, localStorage.getItem('token')).subscribe(response => {
            console.log(response);
            alert('file uploaded');
            this.router.navigate(['front']);
        }, (error: HttpErrorResponse) => {
            console.log(error);
        });
    }


    ngOnInit() {
    }

}
