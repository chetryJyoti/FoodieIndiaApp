import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { IonContent } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @ViewChild(IonContent,{static:false}) content: IonContent;
  urlCheck: any;
  url: any;
  model: any = {};
  deliveryCharge = 36;
  instruction: any;
  location: any={};
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkUrl();
    this.getModel();
  }

  async getModel() {
    let data: any = await this.getCart();
    this.location={
      lat: 26.81446123813128,
      lng: 94.19847979357843,
      address:'Jorhat,Assam'
    };
    if (data?.value) {
      this.model = await JSON.parse(data.value);
      console.log(this.model);
      this.calculate();
    }
  }
  async calculate() {
    let item = this.model.items.filter((x) => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliveryCharge = 0;
    this.model.grandTotal = 0;
    item.forEach((element) => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice +=
        parseFloat(element.price) * parseFloat(element.quantity);
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (
      parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)
    ).toFixed(2);
    if (this.model.totalItem === 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = null;
    }
    console.log('cartData:', this.model);
  }
  clearCart() {
    Storage.remove({
      key: 'cart',
    });
  }
  getCart() {
    return Storage.get({ key: 'cart' });
  }

  quantityPlus(index) {
    try {
      console.log(this.model.items[index]);
      if (
        !this.model.items[index].quantity ||
        this.model.items[index].quantity === 0
      ) {
        this.model.items[index].quantity = 1;
        this.calculate();
      } else {
        this.model.items[index].quantity += 1;
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }
  quantityMinus(index) {
    if (this.model.items[index].quantity !== 0) {
      this.model.items[index].quantity -= 1;
    } else {
      this.model.items[index].quantity = 0;
    }
    this.calculate();
  }

  checkUrl() {
    let url: any = this.router.url.split('/');
    const spliced = url.splice(url.length - 2, 2);
    this.urlCheck = spliced[0];
    url.push(this.urlCheck);
    this.url = url;
  }
  getPreviousUrl() {
    return this.url.join('/');
  }
  scrollToBottom(){
    this.content.scrollToBottom(500);
  }


  changeAddress() {}
  addAddress() {}
  makePayment() {
    console.log('paymentDone');
    try {
      const data={
        restaurantId:this.model.restaurant.uid,
        res:this.model.restaurant,
        order:JSON.stringify(this.model.items),
        time:moment().format('lll'),
        address:this.location,
        total:this.model.totalPrice,
        grandTotal:this.model.grandTotal,
        deliveryCharge:this.deliveryCharge,
        status:'Created',
        paidVia:'COD'
      };
      console.log('orderd:', data);

    } catch (e) {
      console.log(e);

    }
  }
}
