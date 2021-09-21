import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FeatureModel } from '../../assets/models/FeatureModel';

@Component({
  selector: 'app-geovi-card',
  templateUrl: './geovi-card.component.html',
  styleUrls: ['./geovi-card.component.css']
})

export class GeoviCardComponent implements OnInit {

  @Input() myName = "Burak";

  @Input() currentFeatureModel: FeatureModel;

  @Output cardClickedEvent = new EventEmitter<FeatureModel>();

  constructor() { }

  ngOnInit(): void {

   
  }

  onCardClicked() {
    this.cardClickedEvent.emit(this.currentFeatureModel);
  }

}
