import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuCategoryComponent } from './menu-category.component';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, CommonModule],
  declarations: [MenuCategoryComponent],
  providers: [],
  exports: [MenuCategoryComponent],
})
export class MenuCategoryComponentModule {}
