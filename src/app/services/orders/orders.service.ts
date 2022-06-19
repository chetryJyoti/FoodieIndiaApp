/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private _orders = new BehaviorSubject<Order[]>([]);
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
      param.userId = '1';
      // param.order=JSON.stringify(param.order);
      // param.order = JSON.parse(param.order);
      param.id = '5aG0RsPuze8NX00B7uR1E123';
      let currentOrders: Order[] = [];
      currentOrders.push(
        new Order(
          param.restaurant,
          param.address,
          param.restaurantId,
          // JSON.parse(param.order),
          param.order,
          param.total,
          param.grandTotal,
          param.deliveryCharge,
          param.status,
          param.time,
          param.paidVia,
          param.id,
          param.userId,
          param.instruction
        )
      );
      currentOrders = currentOrders.concat(this._orders.value);
      this._orders.next(currentOrders);
    } catch (e) {
      throw e;
    }
  }
}
