import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-loader',
  templateUrl: './restaurant-loader.component.html',
  styleUrls: ['./restaurant-loader.component.scss'],
})
export class RestaurantLoaderComponent implements OnInit {
  dummy =Array(6);
  constructor() { }

  ngOnInit() {}

}
