import { Injectable } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Categories } from 'src/app/models/categories.model';
import { Item } from 'src/app/models/item.model';
import { Order } from 'src/app/models/order.model';
import { Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // home page data
  banners = [
    {
      banner: 'assets/bannerImgs/b1.jpg',
    },
    {
      banner: 'assets/bannerImgs/b2.jpg',
    },
    {
      banner: 'assets/bannerImgs/b3.jpg',
    },
    {
      banner: 'assets/bannerImgs/b4.jpg',
    },
  ];
  restaurants: Restaurant[] = [
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
    },
  ];
  // search page data
  allRestaurants: Restaurant[] = [
    {
      uid: 'r1',
      name: 'Yaaro Ka Adda',
      shortName: 'yaarokaAdda',
      cover: 'assets/bannerImgs/b5.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      deliveryTime: 23,
      price: 100,
      // distance: 5,
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
      // distance: 3,
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
      // distance: 8,
    },
  ];
  // items page data
  restaurants1: Restaurant[] = [
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
  categories: Categories[] = [
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
    {
      id: 'e0',
      name: 'Mexican',
      uid: 'r2',
    },
  ];

  allItems: Item[] = [
    {
      categoryId: 'e0',
      cover: 'assets/itemsImgs/item1.jpg',
      desc: 'Great in taste',
      id: 'i1',
      name: 'Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: 'r2',
      variation: false,
      veg: false,
    },
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
  addresses: Address[] = [
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
  orders: Order[] = [
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
      grandTotal: 540.00,
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
          uid: 'r1',
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
          uid: 'r1',
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
        uid: 'r1',
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
      restaurantId: 'r1',
      status: 'created',
      time: 'Jul 6, 2020 11:44 AM',
      total: 520.00,
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
      grandTotal: 440.00,
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
        cover: 'assets/itemsImgs/item1.jpg',
        cuisines: ['Italian', 'Mexican'],
        deliveryTime: 25,
        description: 'dd',
        email: 'stay@fit.com',
        uid: 'r1',
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
      total: 420.00,
      userId: '1',
    },
  ];
  constructor() {}
}
