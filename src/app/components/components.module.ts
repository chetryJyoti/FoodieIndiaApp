import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantLoaderComponent } from './restaurant-loader/restaurant-loader.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantLoaderComponent,
    EmptyScreenComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    RestaurantComponent,
    RestaurantLoaderComponent,
    EmptyScreenComponent,
  ],
  entryComponents: [],
})
export class ComponentsModule {}
