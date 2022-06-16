import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  isLoading = true;
  addresses: any[] = [];
  constructor(private global: GlobalService) {}

  ngOnInit() {
    this.getAddresses();
  }
  getAddresses() {
    this.isLoading = true;
    setTimeout(() => {
      this.addresses = [
        {
          address: 'Jorhat,Assam, India',
          house: 'Gurmur',
          id: '7Kox63KlggTvV7ebRKar',
          landmark: 'JORHAT',
          lat: 26.1830738,
          lng: 91.74049769999999,
          title: 'Jorhat engineering college',
          userId: '1',
        },
        {
          address: 'Kanuat palace, India',
          house: 'Ground Floor',
          id: '8Kox63KlggTvV7ebRKar',
          landmark: 'Bazar',
          lat: 26.1830738,
          lng: 91.74049769999999,
          title: 'Work',
          userId: '1',
        },
      ];
      this.isLoading=false;
    }, 3000);
  }
  getIcons(title) {
    return this.global.getIcons(title);
  }

  editAddress(address) {
    console.log(address);
  }
  deleteAddress(address) {}
}
