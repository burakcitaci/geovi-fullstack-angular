import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoviCardComponent } from './geovi-card.component';

describe('GeoviCardComponent', () => {
  let component: GeoviCardComponent;
  let fixture: ComponentFixture<GeoviCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoviCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoviCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
