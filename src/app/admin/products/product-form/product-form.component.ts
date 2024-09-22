import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../model/product.model";
import {ProductRepository} from "../../../model/product.repository";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  edit: boolean = false;
  product: Product = new Product();

  constructor(private activeRoute: ActivatedRoute, private repository: ProductRepository, private router: Router) {
    this.edit = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.edit) {
      this.product = repository.getProduct(activeRoute.snapshot.params['id']);
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
