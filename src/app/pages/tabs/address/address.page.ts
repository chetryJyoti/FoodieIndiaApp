import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  isLoading = true;
  addresses: any[] = [];
  constructor() {}

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
      this.isLoading = false;
    }, 3000);
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
  editAddress(address) {
    console.log(address);
  }
  deleteAddress(address) {}
}
