import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NameNationalizeService } from '../../services/name-nationalize.service';
import { NameNationalizeModel } from '../../models/name-nationalize.model';

@Component({
  selector: 'app-name-nationalize',
  templateUrl: './name-nationalize.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameNationalizeComponent {
  readonly data$: Observable<NameNationalizeModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._nameNationalizeService.getOne(data['name']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _nameNationalizeService: NameNationalizeService
  ) {}
}
