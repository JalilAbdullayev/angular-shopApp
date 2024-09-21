import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../model/category.model";
import {CategoryRepository} from "../../model/category.repository";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  public selectedCategory?: Category;
  @Output() category = new EventEmitter<Category>();

  constructor(private categoryRepository: CategoryRepository) {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }
}
