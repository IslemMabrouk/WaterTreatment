import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContratComponent } from './display-contrat.component';

describe('DisplayContratComponent', () => {
  let component: DisplayContratComponent;
  let fixture: ComponentFixture<DisplayContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
