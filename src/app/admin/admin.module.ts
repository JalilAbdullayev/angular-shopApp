import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./auth.guard";
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductFormComponent} from './products/product-form/product-form.component';
import {CategoryFormComponent} from './categories/category-form/category-form.component';
import {CategoryListComponent} from './categories/category-list/category-list.component';
import {OrderListComponent} from './orders/order-list/order-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    ProductListComponent,
    ProductFormComponent,
    CategoryFormComponent,
    CategoryListComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard]
})
export class AdminModule {
}
