import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {
  myPhoto: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {}

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        console.log(this.myPhoto);
      },
      err => {}
    );
  }

  goBack() {
    this.navCtrl.pop();
  }
}
