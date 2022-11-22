import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-select',
  styleUrls: ['./category-select.component.scss'],
  templateUrl: './category-select.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySelectComponent {
  readonly list$: Observable<ProductModel[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {}
}
