import {Injectable, OnInit} from "@angular/core";
import {RestService} from "./rest.service";
import {Product} from "./product.model";

@Injectable()
export class ProductRepository implements OnInit {
  private products: Product[] = []

  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.restService.getProducts().subscribe(products => this.products = products);
  }

  getProduct(id: number): Product {
    return <Product>this.products.find(p => p.id === id);
  }
}
