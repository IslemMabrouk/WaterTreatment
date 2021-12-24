import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTableComponent } from './demande-table.component';

describe('DemandeTableComponent', () => {
  let component: DemandeTableComponent;
  let fixture: ComponentFixture<DemandeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
