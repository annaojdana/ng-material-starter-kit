import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-refreshed-employees-list',
  templateUrl: './refreshed-employees-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefreshedEmployeesListComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(
    void 0
  );
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<EmployeeModel[]> = this.refresh$.pipe(
    switchMap((data) => this._employeeService.getAll())
  );

  constructor(private _employeeService: EmployeeService) {}

  delete(id: number): void {
    this._employeeService
      .delete(id)
      .subscribe(() => this._refreshSubject.next());
  }
}
