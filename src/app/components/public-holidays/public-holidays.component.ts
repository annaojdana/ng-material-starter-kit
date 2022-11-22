import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HolidaysModel } from '../../models/holidays.model';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-public-holidays',
  styleUrls: ['./public-holidays.component.scss'],
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidaysComponent {
  readonly data$: Observable<HolidaysModel[]> = this._holidaysService.getAll();

  constructor(private _holidaysService: HolidaysService) {}
}
