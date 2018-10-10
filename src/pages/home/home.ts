import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoSonidoPage } from './../video-sonido/video-sonido';
import { PhotoPage } from './../photo/photo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  public gotoPhoto() {
    this.navCtrl.push(PhotoPage);
  }

  public gotoVideo() {
    this.navCtrl.push(VideoSonidoPage);
  }
}
