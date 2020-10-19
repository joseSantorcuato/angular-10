import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories$: FirebaseListObservable<any[]>;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
   }

  ngOnInit() {
  }

}
