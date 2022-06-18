/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private _orders = new BehaviorSubject<any>(null);
  constructor(private api: ApiService) {}
  get orders() {
    return this._orders.asObservable();
  }
  getOrders() {
    try {
      const orders = this.api.orders;

      this._orders.next(orders);
    } catch (e) {
      throw e;
    }
  }
  placeOrder(param) {
    try {
      param.user_id = '1';
      param.order = JSON.parse(param.order);
      param.id = '5aG0RsPuze8NX00B7uR1E123';

      this._orders.next(param);
    } catch (e) {
      throw e;
    }
  }
}
