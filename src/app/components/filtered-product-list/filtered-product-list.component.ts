import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.category$,
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(
        (product: ProductModel) => product.category === category
      );
    })
  );

  constructor(
    private _categoryService: CategoryService,
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  selectCategory(category: string): void {
    this._categorySubject.next(category);
  }
}
