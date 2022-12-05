import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  private _ageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'all'
  );
  public age$: Observable<string> = this._ageSubject.asObservable();
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly employee$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$,
    this.age$,
  ]).pipe(
    map(([employee, order, age]: [EmployeeModel[], string, string]) => {
      return employee
        .filter((employee: EmployeeModel) => {
          if (age === '0-20') {
            return employee.employee_age <= 20;
          }
          if (age === '21-30') {
            return employee.employee_age > 20 && employee.employee_age <= 30;
          }
          if (age === '31-40') {
            return employee.employee_age > 30 && employee.employee_age <= 40;
          }
          if (age === '41-50') {
            return employee.employee_age > 40 && employee.employee_age <= 50;
          }
          if (age === '51-100') {
            return employee.employee_age > 50 && employee.employee_age <= 100;
          }

          return employee.employee_age;
        })
        .sort((a, b) => {
          if (a.employee_salary > b.employee_salary)
            return order === 'asc' ? 1 : -1;
          if (a.employee_salary < b.employee_salary)
            return order === 'asc' ? -1 : 1;
          return 0;
        });
    })
  );
  public orders: Observable<string[]> = of(['asc', 'desc']);

  public ages: Observable<string[]> = of([
    'all',
    '0-20',
    '21-30',
    '31-40',
    '41-50',
    '51-100',
  ]);

  constructor(private _employeeService: EmployeeService) {}

  sort(order: string): void {
    this._orderSubject.next(order);
  }

  selectAge(age: string): void {
    this._ageSubject.next(age);
  }
}
