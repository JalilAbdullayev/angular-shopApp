import {Injectable, OnInit} from "@angular/core";
import {RestService} from "./rest.service";
import {Product} from "./product.model";
import {Category} from "./category.model";

@Injectable()
export class ProductRepository implements OnInit {
  private products: Product[] = []

  constructor(private restService: RestService) {
    this.restService.getProducts().subscribe(products => this.products = products);
  }

  ngOnInit() {
  }

  getProduct(id: number): Product {
    return <Product>this.products.find(p => p.id === id);
  }

  getProducts(category?: Category): Product[] {
    if (category) {
      return this.products.filter(p => p.category === category.name);
    }
    return this.products;
  }
}
