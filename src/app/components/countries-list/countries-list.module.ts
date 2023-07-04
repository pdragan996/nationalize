import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryNamePipe } from '../../pipes/country-name.pipe';
import { ProbabilityPercentagePipe } from '../../pipes/probability-percentage.pipe';
import { CountriesListComponent } from './countries-list.component';

@NgModule({
            declarations: [
              CountriesListComponent
            ],
            exports: [
              CountriesListComponent
            ],
            imports: [
              CommonModule,
              ProbabilityPercentagePipe,
              CountryNamePipe,
            ]
          })
export class CountriesListModule { }
