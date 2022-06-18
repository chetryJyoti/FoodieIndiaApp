/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isLoading = false;
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  // toggling loader
  setLoader() {
    this.isLoading = !this.isLoading;
  }
  showAlert(msg: string, header?, buttonArray?) {
    this.alertCtrl
      .create({
        header: header ? header : 'Authentication failed',
        message: msg,
        buttons: buttonArray ? buttonArray : ['OKAY'],
      })
      .then((alertEl) => alertEl.present());
  }

  async showToast(msg, colour, pos, dura = 300) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: dura,
      color: colour,
      position: pos,
    });
    toast.present();
  }

  errorToast(msg?, dura = 4000) {
    this.showToast(
      msg ? msg : 'NO INTERNET CONNECTION',
      'danger',
      'bottom',
      dura
    );
  }

  successToast(msg) {
    this.showToast(msg, 'success', 'bottom');
  }

  showLoader(msg?, spinner?) {
    // this.isLoading = true;
    if (!this.isLoading) {
      this.setLoader();
    }
    return this.loadingCtrl
      .create({
        message: msg,
        spinner: spinner ? spinner : 'bubbles',
      })
      .then((res) => {
        res.present().then(() => {
          if (!this.isLoading) {
            res.dismiss().then(() => {
              console.log('abort presenting');
            });
          }
        });
      })
      .catch((e) => {
        console.log('show loading error:', e);
      });
  }
  hideLoader() {
    if (this.isLoading) {
      this.setLoader();
    }
    return this.loadingCtrl
      .dismiss()
      .then(() => console.log('dissmissed'))
      .catch((e) => {
        console.log('error hide loader: ', e);
      });
  }

  async createModal(options) {
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data) {
      return data;
    }
  }

  modalDismiss(val?) {
    let data: any = val ? val : null;
    console.log('data:', data);
    this.modalCtrl.dismiss(data);
  }

  getIcons(title) {
    const name = title.toLowerCase();
    switch (name) {
      case 'home':
        return 'home-outline';
      case 'work':
        return 'briefcase-outline';
      default:
        return 'location-outline';
    }
  }
}
