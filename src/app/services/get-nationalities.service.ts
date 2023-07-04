import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NationalizeDataModel } from '../models/nationalize-data.model';

@Injectable({
  providedIn: 'root'
})
export class GetNationalitiesService {
  nationalizeUrl = 'https://api.nationalize.io/';

  constructor(private _http: HttpClient) {}

  getNationalities(names: string[]): Observable<NationalizeDataModel[]> {
    const mappedNames: string[] = names.map(name => `name[]=${name}`);
    const params = new HttpParams({ fromString: mappedNames.join('&') })

    return this._http.get<NationalizeDataModel[]>(this.nationalizeUrl, {params })
  }
}
