import {Component} from '@angular/core';
import {ProductRepository} from "../../../model/product.repository";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private productRepository: ProductRepository) {
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts();
  }

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product);
  }
}
