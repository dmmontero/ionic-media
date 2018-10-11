import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VideoSonidoPage } from './../pages/video-sonido/video-sonido';
import { PhotoPage } from './../pages/photo/photo';

import { Camera } from '@ionic-native/camera';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [MyApp, HomePage, VideoSonidoPage, PhotoPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, VideoSonidoPage, PhotoPage],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    StreamingMedia,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
