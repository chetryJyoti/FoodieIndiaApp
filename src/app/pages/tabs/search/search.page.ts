import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No restaurants found!!',
    subTitle: 'Available soon',
  };
  query: any;
  isLoading: boolean;
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
  restaurants: any[] = [];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if (this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await this.allRestaurants.filter((element: any) =>
          element.shortName.includes(this.query)
        );
        console.log(this.restaurants);
        this.isLoading = false;
      }, 1000);
    }
  }
}
