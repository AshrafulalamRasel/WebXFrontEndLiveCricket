import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {UsersModule} from './component/users.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule {
}
