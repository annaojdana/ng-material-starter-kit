import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CategorySelectComponent } from './category-select.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [CategorySelectComponent],
  providers: [],
  exports: [CategorySelectComponent],
})
export class CategorySelectComponentModule {}
