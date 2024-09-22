import {Component} from '@angular/core';
import {CategoryRepository} from "../../../model/category.repository";
import {Category} from "../../../model/category.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  constructor(private repository: CategoryRepository) {
  }

  getCategories(): Category[] {
    return this.repository.getCategories();
  }

  deleteCategory(category: Category) {
    this.repository.deleteCategory(category);
  }
}
