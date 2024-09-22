import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CategoryRepository} from "../../../model/category.repository";
import {Category} from "../../../model/category.model";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  edit: boolean = false;
  category: Category = new Category();

  constructor(private activeRoute: ActivatedRoute, private repository: CategoryRepository, private router: Router) {
    this.edit = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.edit) {
      this.category = repository.getCategory(activeRoute.snapshot.params['id']);
    }
  }

  save(form: NgForm) {
    this.repository.saveCategory(this.category);
    this.router.navigateByUrl('/admin/main/categories');
  }

}
