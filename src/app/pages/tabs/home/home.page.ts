import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  banners: any[] = [];
  restaurants: any[] = [];
  isLoading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.banners=this.api.banners;
      this.restaurants=this.api.restaurants;
      this.isLoading = false;
    }, 3000);
  }
}
