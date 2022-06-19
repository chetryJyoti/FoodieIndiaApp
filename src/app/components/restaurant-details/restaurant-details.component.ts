import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() data: Restaurant;
  @Input() isLoading;
  constructor() {}

  ngOnInit() {}
  getCuisines(cuisine) {
    return cuisine.join(',');
  }
}
