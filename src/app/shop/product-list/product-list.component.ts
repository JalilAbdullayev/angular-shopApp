import {Component, Input} from '@angular/core';
import {Product} from "../../model/product.model";
import {Cart} from "../../model/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct?: Product;
  @Input() products: Product[] = [];

  constructor(private cart: Cart, private router: Router) {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }
}
