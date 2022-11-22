import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserDetailsModel } from '../models/user-details.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  create(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this._httpClient.post<UserModel>(
      'https://fakestoreapi.com/auth/login',
      user
    );
  }

  getOne(id: string): Observable<UserDetailsModel> {
    return this._httpClient.get<UserDetailsModel>(
      `https://fakestoreapi.com/users/${id}`
    );
  }
}
