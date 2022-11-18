import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUserModel } from '../models/new-user.model';

@Injectable()
export class NewUserService {
  constructor(private _httpClient: HttpClient) {}

  create(newUser: NewUserModel): Observable<NewUserModel> {
    return this._httpClient.post<NewUserModel>(
      'https://fakestoreapi.com/users',
      newUser
    );
  }
}
