import {Component} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {CategoryRepository} from "../model/category.repository";
import {Product} from "../model/product.model";
import {Category} from "../model/category.model";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public selectedCategory: Category = null;
  public productsPerPage: number = 3;
  public selectedPage: number = 1;

  constructor(private productRepository: ProductRepository, private categoryRepository: CategoryRepository) {
  }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory).slice(index, index + this.productsPerPage);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    return this.selectedCategory = newCategory;
  }
}
