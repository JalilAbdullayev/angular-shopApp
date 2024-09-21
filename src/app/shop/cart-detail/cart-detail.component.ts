import {Component} from '@angular/core';
import {Cart} from "../../model/cart.model";

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {
  constructor(public cart: Cart) {
  }

  protected readonly parseFloat = parseFloat;
}
