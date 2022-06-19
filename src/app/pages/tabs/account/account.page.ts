/* eslint-disable prefer-const */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, OnDestroy {
  isLoading = true;
  profile: any = {};
  orders: Order[] = [];
  ordersSub: Subscription;
  constructor(
    private orderService: OrdersService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.ordersSub = this.orderService.orders.subscribe(
      (order) => {
        console.log('orderData:', order);
        this.orders = order;
      },
      (e) => {
        console.log(e);
      }
    );
    this.getData();
  }

  logOut() {}

  async reorder(order: Order) {
    let data: any = await this.cartService.getCart();
    console.log('data: ', data);
    if (data?.value) {
      this.cartService.alertClearCart(null, null, null, order);
    } else {
      this.cartService.orderToCart(order);
    }
  }
  getHelp(order) {
    console.log(order);
  }
  async getData() {
    setTimeout(async () => {
      this.isLoading = true;
      this.profile = {
        name: 'Chetry jyoti',
        phone: 6003224608,
        email: 'chetryJyoti@gmail.com',
      };
      await this.orderService.getOrders();
      this.isLoading = false;
    }, 3000);
  }
  ngOnDestroy() {
    if (this.ordersSub) {
      this.ordersSub.unsubscribe();
    }
  }
}
