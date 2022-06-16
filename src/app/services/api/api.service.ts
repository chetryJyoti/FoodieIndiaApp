import { Injectable } from '@angular/core';

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
  restaurants = [
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
  allRestaurants: any[] = [
    {
      uid:'r1',
      name: 'Yaaro Ka Adda',
      shortName:'yaarokaAdda',
      cover: 'assets/bannerImgs/b5.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 5,
      deliveryTime: 23,
      price: 100,
      // distance: 5,
    },
    {
      uid:'r2',
      name: 'Healthy Eats',
      shortName:'healthyeats',
      cover: 'assets/bannerImgs/b4.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 4,
      deliveryTime: 50,
      price: 500,
      // distance: 3,
    },
    {
      uid:'r3',
      name: 'Foodie Junction',
      shortName:'foodiejunction',
      cover: 'assets/bannerImgs/b3.jpg',
      cuisines: ['Italian', 'Mexican'],
      rating: 3,
      deliveryTime: 30,
      price: 400,
      // distance: 8,
    },
  ];
  // items page data
  restaurants1: any[] = [
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

  constructor() {}
}
