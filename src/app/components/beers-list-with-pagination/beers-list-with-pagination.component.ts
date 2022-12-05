import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BeersModel } from '../../models/beers.model';
import { BeersService } from '../../services/beers.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-beers-list-with-pagination',
  templateUrl: './beers-list-with-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeersListWithPaginationComponent {
  limitPagesOptions: number[] = [5, 10, 50, 100];

  private _pageNumberSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(1);
  public pageNumber$: Observable<number> =
    this._pageNumberSubject.asObservable();
  private _limitPageSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(5);
  public limitPage$: Observable<number> = this._limitPageSubject.asObservable();

  beersList$: Observable<BeersModel[]> = this._beersService.getAll(
    this._pageNumberSubject.value,
    this._limitPageSubject.value
  );

  constructor(private _beersService: BeersService) {}

  handlePageEvent(e: PageEvent): void {
    this._pageNumberSubject.next(e.pageIndex + 1);
    this._limitPageSubject.next(e.pageSize);

    this._beersService
      .getAll(this._pageNumberSubject.value, this._limitPageSubject.value)
      .subscribe((data) => this.beersList$);

    this.beersList$ = this._beersService.getAll(
      this._pageNumberSubject.value,
      this._limitPageSubject.value
    );
  }
}
