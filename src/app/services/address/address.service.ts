import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private _addresses = new BehaviorSubject<any>(null);

  constructor(private api: ApiService) {}
  // curd operations create,upadate,delete for address
  get addresses() {
    // eslint-disable-next-line no-underscore-dangle
    return this._addresses.asObservable();
  }
  getAddresses() {
    try {
      // user id
      // eslint-disable-next-line prefer-const
      let allAddresses: any[] = this.api.addresses;
      console.log(allAddresses);
      // eslint-disable-next-line no-underscore-dangle
      this._addresses.next(allAddresses);
      return allAddresses;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  addAddress() {}
  updateAddress() {}

  deleteAddress(param) {
    param.delete = true;
    // eslint-disable-next-line no-underscore-dangle
    this._addresses.next(param);
  }
}
