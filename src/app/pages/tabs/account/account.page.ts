import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  isLoading= true;
  profile: any = {};
  orders: any = [];

  constructor() {}

  ngOnInit() {
    this.getData();
  }
  logOut() {}
  reorder(order) {
    console.log(order);
  }
  getHelp(order) {
    console.log(order);
  }
  getData() {
    setTimeout(() => {
      this.isLoading=true;
      this.profile = {
        name: 'Chetry jyoti',
        phone: 6003224608,
        email: 'chetryJyoti@gmail.com',
      };
      this.orders = [
        {
          address: {
            address: 'Indira Nagar Rd, Borsojai, Basistha 781029, India',
            house: 'dsgd',
            id: 'cLQdnS8YXk5HTDfM3UQC',
            landmark: 'fdgs',
            lat: 26.108991978867923,
            lng: 91.79069981213378,
            title: 'yui',
            userId: 'UA5JWxgjDOYgfXe92H0pFHwulTz2',
          },
          deliveryCharge: 20,
          grandTotal: '540.00',
          id: '5aG0RsPuze8NX00B7uRP',
          order: [
            {
              categoryId: 'e10',
              cover: 'assets/imgs/baha.jpg',
              desc: 'Great in taste',
              id: 'i32',
              name: 'Bahamas',
              price: 270,
              quantity: 1,
              rating: 0,
              status: true,
              uid: 'r5',
              variation: false,
              veg: false,
            },
            {
              categoryId: 'e10',
              cover: 'assets/imgs/mofo.jpg',
              desc: 'Great in taste',
              id: 'i33',
              name: 'Mofongo',
              price: 250,
              quantity: 1,
              rating: 0,
              status: true,
              uid: 'r5',
              variation: false,
              veg: true,
            },
          ],
          paidVia: 'COD',
          restaurant: {
            address: 'Christan Basti, India',
            city: '909090567',
            closeTime: '21:00',
            cover: '',
            cuisines: ['Caribbean food', 'North Indian', 'Vietnamese'],
            deliveryTime: 25,
            description: 'dd',
            email: 'DosaPlaza@gmail.com',
            latitude: 26.1286243,
            longitude: 91.8012675,
            id: 'r5',
            isClose: true,
            name: 'DosaPlaza',
            openTime: '07:00',
            phone: 6619563867,
            price: 27,
            rating: 4.7,
            shortName: 'stayfit',
            status: 'open',
            totalRating: 13,
          },
          restaurantId: 'r5',
          status: 'created',
          time: 'Jul 6, 2020 11:44 AM',
          total: '520.00',
          userId: '1',
        },
        {
          address: {
            address: 'Indira Nagar Rd, Borsojai, Basistha 781029, India',
            house: 'dsgd',
            id: 'cLQdnS8YXk5HTDfM3UQC',
            landmark: 'fdgs',
            lat: 26.108991978867923,
            lng: 91.79069981213378,
            title: 'yui',
            userId: 'UA5JWxgjDOYgfXe92H0pFHwulTz2',
          },
          deliveryCharge: 20,
          grandTotal: '440.00',
          id: '5aG0RsPuze8NX00B7uR1',
          order: [
            {
              categoryId: 'e00',
              cover: 'assets/imgs/pizza.jpg',
              desc: 'Great in taste',
              id: 'i1',
              name: 'Pizza',
              price: 120,
              quantity: 1,
              rating: 0,
              status: true,
              uid: 'r1',
              variation: false,
              veg: false,
            },
            {
              categoryId: 'e00',
              cover: 'assets/imgs/pasta.jpg',
              desc: 'Great in taste',
              id: 'i3',
              name: 'Pasta',
              price: 150,
              quantity: 2,
              rating: 0,
              status: true,
              uid: 'r1',
              variation: false,
              veg: false,
            },
          ],
          paidVia: 'COD',
          restaurant: {
            address: 'Beltola Tiniali, India',
            city: '909090271',
            closeTime: '20:00',
            cover: 'assets/imgs/restaurant-1.jpg',
            cuisines: ['Italian', 'Mexican'],
            deliveryTime: 25,
            description: 'dd',
            email: 'stay@fit.com',
            id: 'r1',
            isClose: true,
            latitude: 26.1286243,
            longitude: 91.8012675,
            name: 'Stayfit',
            openTime: '08:00',
            phone: 6786745745,
            price: 25,
            rating: 0,
            shortName: 'stayfit',
            status: 'open',
            totalRating: 0,
          },
          restaurantId: 'r1',
          status: 'Delivered',
          time: 'Jul 7, 2020 11:44 AM',
          total: '420.00',
          userId: '1',
        },
      ];
      this.isLoading=false;
    }, 3000);
  }

}
