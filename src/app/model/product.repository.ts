import {Injectable} from "@angular/core";
import {RestService} from "./rest.service";
import {Product} from "./product.model";
import {Category} from "./category.model";

@Injectable()
export class ProductRepository {
  private products: Product[] = []

  constructor(private restService: RestService) {
    this.restService.getProducts().subscribe(products => this.products = products);
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

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.restService.addProduct(product).subscribe(p => this.products.push(p))
    } else {
      this.restService.updateProduct(product)
        .subscribe(p => this.products.splice(this.products.findIndex(p => p.id === product.id), 1, product))
    }
  }

  deleteProduct(product: Product) {
    this.restService.deleteProduct(product)
      .subscribe(p => this.products.splice(this.products.findIndex(p => p.id === product.id), 1));
  }
}
