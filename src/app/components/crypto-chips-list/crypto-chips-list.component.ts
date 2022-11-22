import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-chips-list',
  styleUrls: ['./crypto-chips-list.component.scss'],
  templateUrl: './crypto-chips-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoChipsListComponent {
  readonly data$: Observable<CryptoModel[]> = this._cryptosService.getAll();

  constructor(private _cryptosService: CryptosService) {}
}
