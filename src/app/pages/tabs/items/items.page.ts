import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  isLoading: boolean;
  id: any;
  data: any = {};
  items: any[] = [];
  cartData: any = {};
  storedData: any = {};
  model={
    icon:'fast-food-outline',
    title:'No menu available'
  };
  veg = false;
  restaurants: any[] = [
    {
      uid: 'r1',
      name: 'Yaaro Ka Adda',
      shortName: 'yaarokaAdda',
      cover: 'assets/bannerImgs/b5.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      deliveryTime: 23,
      price: 100,
      distance: 5,
      address: 'Jorhat,Assam',
    },
    {
      uid: 'r2',
      name: 'Healthy Eats',
      shortName: 'healthyeats',
      cover: 'assets/bannerImgs/b4.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 4,
      deliveryTime: 50,
      price: 500,
      distance: 3,
      address: 'Guwahati,Assam',
    },
    {
      uid: 'r3',
      name: 'Foodie Junction',
      shortName: 'foodiejunction',
      cover: 'assets/bannerImgs/b3.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 3,
      deliveryTime: 30,
      price: 400,
      distance: 8,
      address: 'Ledo,Assam',
    },
  ];
  categories: any[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: 'r1',
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: 'r1',
    },
  ];

  allItems = [
    {
      categoryId: 'e00',
      cover: 'assets/itemsImgs/item1.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: 'r1',
      variation: false,
      veg: false,
    },
    {
      categoryId: 'e0',
      cover: 'assets/itemsImgs/item2.jpg',
      desc: 'Great in taste',
      id: 'i2',
      name: 'Caprese Salad',
      price: 200,
      rating: 0,
      status: true,
      uid: 'r1',
      variation: false,
      veg: true,
    },
    {
      categoryId: 'e00',
      cover: 'assets/itemsImgs/item3.jpg',
      desc: 'Great in taste',
      id: 'i3',
      name: 'Pasta',
      price: 150,
      rating: 0,
      status: true,
      uid: 'r1',
      variation: false,
      veg: false,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap) => {
      console.log('Data', paraMap);
      if (!paraMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paraMap.get('restaurantId');
      console.log('RestaurantId:', this.id);
      this.getItems();
    });
  }
  getCart() {
    return Storage.get({ key: 'cart' });
  }
  async getItems() {
    this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout(async () => {
      let data: any = this.restaurants.filter((x) => x.uid === this.id);
      this.data = data[0];
      this.categories = this.categories.filter((x) => x.uid === this.id);
      this.items = this.allItems.filter((x) => x.uid === this.id);
      console.log('restaurantData:', this.data);
      let cart: any = await this.getCart();
      console.log('Cart:', cart);
      if (cart?.value) {
        this.storedData = JSON.parse(cart.value);
        console.log('StoredData:', this.storedData);
        if (
          this.id === this.storedData.restaurant.uid &&
          this.allItems.length > 0
        ) {
          this.allItems.forEach((element: any) => {
            this.storedData.items.forEach((ele) => {
              if (element.id !== ele.id) {
                return;
              }
              element.quantity = ele.quantity;
            });
          });
        }
        this.cartData.totalItem = this.storedData.totalItem;
        this.cartData.totalPrice = this.storedData.totalPrice;
      }
      this.isLoading = false;
    }, 3000);
  }

  vegOnly(event) {
    console.log(event.detail.checked);
    this.items = [];
    if (event.detail.checked === true) {
      this.items = this.allItems.filter((x) => x.veg === true);
    } else {
      this.items = this.allItems;
    }
  }
  quantityPlus(index) {
    try {
      console.log(this.items[index]);
      if (!this.items[index].quantity || this.items[index].quantity === 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch (e) {
      console.log(e);
    }
  }
  quantityMinus(index) {
    if (this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }
  calculate() {
    console.log(this.items);
    this.cartData.items = [];
    let item = this.items.filter((x) => x.quantity > 0);
    console.log('Added items:', item);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach((element) => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice +=
        parseFloat(element.price) * parseFloat(element.quantity);
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if (this.cartData.totalItem === 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log('cartData:', this.cartData);
  }
  saveTocart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log('addtoCart:', this.cartData);
      Storage.set({
        key: 'cart',
        value: JSON.stringify(this.cartData),
      });
    } catch (e) {
      console.log(e);
    }
  }
  async viewCart() {
    if (this.cartData.items && this.cartData.items.length > 0) {
      await this.saveTocart();
    }
    this.router.navigate([this.router.url + '/cart']);
  }
}
