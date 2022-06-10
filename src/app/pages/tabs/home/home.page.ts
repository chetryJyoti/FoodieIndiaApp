import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[] = [];
  restaurants: any[] = [];
  isLoading = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.banners = [
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
      this.restaurants = [
        {
          uid:'r1',
          name: 'Yaaro Ka Adda',
          shortName:'yaarokaAdda',
          cover: 'assets/bannerImgs/b5.jpg',
          cuisines: ['Italian', 'Mexican'],
          rating: 5,
          deliveryTime: 23,
          price: 100,
          distance: 5,
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
          distance: 3,
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
          distance: 8,
        },
      ];
      this.isLoading = false;
    }, 3000);
  }
}
