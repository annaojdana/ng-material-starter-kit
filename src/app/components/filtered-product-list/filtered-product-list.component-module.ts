import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatCardModule } from '@angular/material/card';
import { FilteredProductListComponent } from './filtered-product-list.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MatListModule,
    FlexModule,
    CommonModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [FilteredProductListComponent],
  providers: [],
  exports: [FilteredProductListComponent],
})
export class FilteredProductListComponentModule {}
