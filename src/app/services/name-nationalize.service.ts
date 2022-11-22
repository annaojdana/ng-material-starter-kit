import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NameNationalizeModel } from '../models/name-nationalize.model';

@Injectable()
export class NameNationalizeService {
  constructor(private _httpClient: HttpClient) {}

  getOne(name: string): Observable<NameNationalizeModel> {
    return this._httpClient.get<NameNationalizeModel>(
      `https://api.nationalize.io/?name=${name}`
    );
  }
}
