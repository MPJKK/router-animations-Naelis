import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {MapComponent} from './map/map.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {FrontComponent} from './front/front.component';
import {UploadComponent} from './upload/upload.component';

const routes: Routes = [
    {
        path: 'setup', component: SetupComponent,
        data: { state: 'setup'}
    },
    {
        path: 'routes', component: RoutesComponent,
        data: { state: 'routes' }
    },
    {
        path: 'map', component: MapComponent,
        data: { state: 'map' }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { state: 'login'}
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { state: 'register' }
    },
    {
        path: 'logout',
        component: LogoutComponent,
    },
    {
        path: 'front',
        component: FrontComponent,
        data: { state: 'front' }
    },
    {
        path: 'upload',
        component: UploadComponent,
        data: { state: 'upload'}
    },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

