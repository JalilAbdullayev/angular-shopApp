import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RestService} from "./rest.service";
import {ProductRepository} from "./product.repository";
import {CategoryRepository} from "./category.repository";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RestService, ProductRepository, CategoryRepository]
})
export class ModelModule {
}
