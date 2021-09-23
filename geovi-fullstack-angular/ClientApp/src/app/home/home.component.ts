import { Component } from '@angular/core';
import { FeatureModel } from '../../assets/models/FeatureModel';
import { FEATUREMODELS } from '../../assets/dataService/Globals';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NavbarService } from 'src/assets/services/NavbarService';
import { Subscription } from 'rxjs';
import { GeoviCardDetailComponent } from '../geovi-card-detail/geovi-card-detail.component';
export let browserRefresh = false;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  allFeatureModels: FeatureModel [] = FEATUREMODELS;
  subscription : Subscription;
  currentName = "Buraks";

  constructor(private router : Router, navService : NavbarService){
    navService.show(); 
  }
  
  cardClicked(featureModel: FeatureModel) {
    this.router.navigateByUrl('/geovi-card-detail', {state : featureModel});
  }
}
