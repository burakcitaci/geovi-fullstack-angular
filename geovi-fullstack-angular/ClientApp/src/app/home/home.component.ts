import { Component } from '@angular/core';
import { FeatureModel } from '../../assets/models/FeatureModel';
import { FEATUREMODELS } from '../../assets/dataService/Globals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  allFeatureModels: FeatureModel [] = FEATUREMODELS;
 
  currentName = "Buraks";

  cardClicked(featureModel: FeatureModel) {
    alert(featureModel.title);
  }
}
