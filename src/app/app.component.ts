import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { NationalizeDataModel } from './models/nationalize-data.model';
import { GetNamesService } from './services/get-names.service';
import { GetNationalitiesService } from './services/get-nationalities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
