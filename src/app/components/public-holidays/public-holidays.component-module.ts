import { NgModule } from '@angular/core';
import { PublicHolidaysComponent } from './public-holidays.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    NgForOf,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    AsyncPipe
  ],
  declarations: [PublicHolidaysComponent],
  providers: [],
  exports: [PublicHolidaysComponent]
})
export class PublicHolidaysComponentModule {
}
