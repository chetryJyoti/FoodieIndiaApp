/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { __param } from 'tslib';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private _addresses = new BehaviorSubject<Address[]>([]);

  constructor(private api: ApiService) {}
  // curd operations create,upadate,delete for address
  get addresses() {
    return this._addresses.asObservable();
  }
  getAddresses() {
    try {
      // user id
      let allAddresses: Address[] = this.api.addresses;
      console.log(allAddresses);
      this._addresses.next(allAddresses);
      return allAddresses;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  addAddress(param) {
    param.id = 'address1';
    param.userId = 'user1';
    const currentAddresses = this._addresses.value;
    currentAddresses.push(
      new Address(
        param.id,
        param.address,
        param.title,
        param.userId,
        param.house,
        param.landmark,
        param.lat,
        param.lng
      )
    );
    this._addresses.next(currentAddresses);
  }
  updateAddress(id, param) {
    param.id = id;
    let currentAddresses = this._addresses.value;
    const index = currentAddresses.findIndex((x) => x.id === id);
    currentAddresses[index] = new Address(
      param.id,
      param.address,
      param.title,
      param.userId,
      param.house,
      param.landmark,
      param.lat,
      param.lng
    );
    this._addresses.next(currentAddresses);
  }

  deleteAddress(param) {
    let currentAddresses = this._addresses.value;
    currentAddresses = currentAddresses.filter((x) => x.id !== param.id);
    this._addresses.next(currentAddresses);
  }
}
