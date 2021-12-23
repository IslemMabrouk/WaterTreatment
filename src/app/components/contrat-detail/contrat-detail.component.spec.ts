import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDetailComponent } from './contrat-detail.component';

describe('ContratDetailComponent', () => {
  let component: ContratDetailComponent;
  let fixture: ComponentFixture<ContratDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
