import {Component} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";
import {Category} from "../model/category.model";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public selectedCategory?: Category;
  public productsPerPage: number = 3;
  public selectedPage: number = 1;
  public selectedProducts: Product[] = [];
  protected readonly parseInt = parseInt;

  constructor(private productRepository: ProductRepository) {
  }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;
    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);
    return this.selectedProducts.slice(index, index + this.productsPerPage);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((a, i) => i + 1);
  }

  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

  getCategory(category: Category) {
    this.selectedCategory = category;
  }
}
