import { NgModule } from '@angular/core';
import { CryptoChipsListComponent } from './crypto-chips-list.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    NgForOf,
    MatChipsModule,
    MatCardModule,
    AsyncPipe
  ],
  declarations: [CryptoChipsListComponent],
  providers: [],
  exports: [CryptoChipsListComponent]
})
export class CryptoChipsListComponentModule {
}
