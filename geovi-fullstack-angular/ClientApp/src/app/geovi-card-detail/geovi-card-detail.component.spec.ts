import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoviCardDetailComponent } from './geovi-card-detail.component';

describe('GeoviCardDetailComponent', () => {
  let component: GeoviCardDetailComponent;
  let fixture: ComponentFixture<GeoviCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoviCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoviCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
