/* eslint-disable prefer-const */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { OrdersService } from 'src/app/services/orders/orders.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  urlCheck: any;
  url: any;
  model: any = {};
  deliveryCharge = 36;
  instruction: any;
  location: any = {};
  cartSub: Subscription;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private orderService: OrdersService,
    private global: GlobalService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.cartSub = this.cartService.cart.subscribe((cart) => {
      console.log('cart page: ', cart);
      this.model = cart;
      if (!this.model) {
        this.location = {};
      }
      console.log('cart page model: ', this.model);
    });
    this.getData();
  }

  async getData() {
    await this.checkUrl();
    this.location = {
      lat: 26.81446123813128,
      lng: 94.19847979357843,
      address: 'Jorhat,Assam',
    };
    await this.cartService.getCartData();
  }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
  }
  quantityMinus(index) {
    this.cartService.quantityMinus(index);
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
  // for viewing detailed bills
  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  ionViewWillLeave() {
    if (this.model?.items && this.model?.items.length > 0) {
      console.log('ionViewWillLeave');
      this.cartService.saveCart();
    }
  }

  changeAddress() {}
  addAddress() {}
  async makePayment() {
    console.log('paymentDone');
    try {
      const data = {
        restaurantId: this.model.restaurant.uid,
        instruction: this.instruction ? this.instruction : '',
        res: this.model.restaurant,
        order: JSON.stringify(this.model.items),
        time: moment().format('lll'),
        address: this.location,
        total: this.model.totalPrice,
        grandTotal: this.model.grandTotal,
        deliveryCharge: this.deliveryCharge,
        status: 'Created',
        paidVia: 'COD',
      };
      console.log('orderd:', data);
      await this.orderService.placeOrder(data);
      await this.cartService.clearCart();
      this.global.successToast('Order palced successfully!');
      this.navCtrl.navigateRoot(['/tabs/account']);
    } catch (e) {
      console.log(e);
    }
  }
}
