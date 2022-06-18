import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit, OnDestroy {
  isLoading = true;
  profile: any = {};
  orders: any[] = [];
  ordersSub: Subscription;
  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.ordersSub = this.orderService.orders.subscribe(
      (order) => {
        console.log('orderData:', order);
        if (order instanceof Array) {
          this.orders = order;
        }
      },
      (e) => {
        console.log(e);
      }
    );
    this.getData();
  }

  logOut() {}
  reorder(order) {
    console.log(order);
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
