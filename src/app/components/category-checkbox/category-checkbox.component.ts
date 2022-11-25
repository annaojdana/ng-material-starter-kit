import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-checkbox',
  styleUrls: ['./category-checkbox.component.scss'],
  templateUrl: './category-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCheckboxComponent {
  readonly list$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {}
}
