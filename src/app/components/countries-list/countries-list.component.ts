import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { CountryInfo, NationalizeDataModel } from '../../models/nationalize-data.model';
import { GetNamesService } from '../../services/get-names.service';
import { GetNationalitiesService } from '../../services/get-nationalities.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit, OnDestroy{

  sub: Subscription = new Subscription();
  nationalizeData: NationalizeDataModel[] = [];

  constructor(
    private _getNamesService: GetNamesService,
    private _getNationalitiesService: GetNationalitiesService
  ) {}

  ngOnInit(): void {
    this.sub = this._getNamesService.getNames().pipe(
      switchMap(names => this._getNationalitiesService.getNationalities(names))
    ).subscribe((response: NationalizeDataModel[]) => {
      this.nationalizeData = response;
    });
  }

  nationalizeTrack(index: number, item: NationalizeDataModel): number {
    return index;
  }

  countryTrack(index: number, item: CountryInfo): string {
    return item.country_id
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
