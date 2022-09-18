import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { console.log('More Info clicked'); }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { console.log('Dismiss clicked'); }
        }
      ]
    });

    await toast.present();
  }
}
