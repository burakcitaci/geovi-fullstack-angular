import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { FeatureModel, FeatureModelJSON } from 'src/assets/models/FeatureModel';
import { NavbarService } from 'src/assets/services/NavbarService';
import { Subscription } from 'rxjs';
import { visitAll } from '@angular/compiler';
import { consoleTestResultHandler } from 'tslint/lib/test';

@Component({
  selector: 'app-geovi-card-detail',
  templateUrl: './geovi-card-detail.component.html',
  styleUrls: ['./geovi-card-detail.component.css']
})
export class GeoviCardDetailComponent implements OnInit {
  subscription : Subscription;
  currentFeatureModel : FeatureModel;
  featureJsonModel : FeatureModelJSON;
  constructor(private location : Location, router : Router, navService : NavbarService)
  {
    navService.hide();
    this.currentFeatureModel = router.getCurrentNavigation().extras.state as FeatureModel;
    
    
  }

  async ngOnInit(): Promise<void>{
    this.featureJsonModel = await this.api<FeatureModelJSON>(this.currentFeatureModel.url);
    this.featureJsonModel.editingInfo.lastEditDate = new Date(this.featureJsonModel.editingInfo.lastEditDate).toUTCString();
    
  }

  backClicked(){
    this.location.back();
  }

  // Standard variation
  async api<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const body = await response.json();
    return body;
}

}
