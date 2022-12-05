import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { ApiResponse } from './api.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeModel[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeModel[]>): EmployeeModel[] => {
          return response.data;
        })
      );
  }

  delete(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(
      `https://dummy.restapiexample.com/public/api/v1/delete/${id}`
    );
  }
}
