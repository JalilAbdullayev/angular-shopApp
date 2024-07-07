import {NgModule} from '@angular/core';
import {ModelModule} from "../model/model.module";
import {ShopComponent} from './shop.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ShopComponent,
    NavbarComponent
  ],
  imports: [ModelModule, BrowserModule, FormsModule],
  exports: [ShopComponent]
})
export class ShopModule {
}
