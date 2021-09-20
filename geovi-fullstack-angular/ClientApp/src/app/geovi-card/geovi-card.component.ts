import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geovi-card',
  templateUrl: './geovi-card.component.html',
  styleUrls: ['./geovi-card.component.css']
})
export class GeoviCardComponent implements OnInit {

  @Input() myName = "Burak";
  constructor() { }

  ngOnInit(): void {
  }

}
