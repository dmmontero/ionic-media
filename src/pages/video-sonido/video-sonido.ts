import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  StreamingMedia,
  StreamingVideoOptions,
  StreamingAudioOptions
} from '@ionic-native/streaming-media';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the VideoSonidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-sonido',
  templateUrl: 'video-sonido.html'
})
export class VideoSonidoPage {
  mensaje: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private streamingMedia: StreamingMedia,
    private toastCtrl: ToastController
  ) {}

  presentToast(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  startVideo() {
    this.presentToast('Ver video');
    let options: StreamingVideoOptions = {
      successCallback: () => {
        this.presentToast('Finished Video');
        console.log('Finished Video');
      },
      errorCallback: e => {
        this.presentToast('Error');
        console.log('Error: ', e);
      },
      orientation: 'portrait'
    };

    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(
      'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4',
      options
    );
  }

  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => {
        console.log('Finished Audio');
      },
      errorCallback: e => {
        console.log('Error: ', e);
      },
      initFullscreen: false // iOS only!
    };

    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio(
      'http://soundbible.com/grab.php?id=2196&type=mp3',
      options
    );
  }

  stopAudio() {
    this.streamingMedia.stopAudio();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
