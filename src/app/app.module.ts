import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {FormsModule} from '@angular/forms';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {FrontComponent} from './front/front.component';
import {MediaService} from './services/media.service';
import {UploadComponent} from './upload/upload.component';
import {ThumbnailPipe} from './pipes/thumbnail.pipe';



@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        MapComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        FrontComponent,
        UploadComponent,
        ThumbnailPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyAbos3jG3-NcWSROdboxsgV-ugEEyk_nLM'})
    ],
    providers: [DigitransitService, MediaService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
