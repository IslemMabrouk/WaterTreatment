import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoucisseurDetailComponent } from './adoucisseur-detail.component';

describe('AdoucisseurDetailComponent', () => {
  let component: AdoucisseurDetailComponent;
  let fixture: ComponentFixture<AdoucisseurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoucisseurDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoucisseurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
