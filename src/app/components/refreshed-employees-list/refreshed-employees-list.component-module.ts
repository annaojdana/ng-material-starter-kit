import { NgModule } from '@angular/core';
import { RefreshedEmployeesListComponent } from './refreshed-employees-list.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [NgForOf, AsyncPipe, MatListModule, MatIconModule, MatButtonModule],
  declarations: [RefreshedEmployeesListComponent],
  providers: [],
  exports: [RefreshedEmployeesListComponent],
})
export class RefreshedEmployeesListComponentModule {}
