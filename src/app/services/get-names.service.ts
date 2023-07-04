import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jsonServerUrl } from '../shared/app.config';

@Injectable({
  providedIn: 'root'
})
export class GetNamesService {
  serviceName = 'getNames';

  constructor(private _http: HttpClient) {}

  getNames(): Observable<string[]> {
    const url = `${jsonServerUrl}/${this.serviceName}`
    return this._http.get<string[]>(url);
  }
}
