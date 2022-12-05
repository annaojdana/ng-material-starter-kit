import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BeersListWithPaginationComponent } from './beers-list-with-pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatPaginatorModule],
  declarations: [BeersListWithPaginationComponent],
  providers: [],
  exports: [BeersListWithPaginationComponent],
})
export class BeersListWithPaginationComponentModule {}
