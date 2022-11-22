import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-menu-category',
  styleUrls: ['./menu-category.component.scss'],
  templateUrl: './menu-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCategoryComponent {
  readonly list$: Observable<ProductModel[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {}
}
