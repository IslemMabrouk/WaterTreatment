import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDemandeComponent } from './validation-demande.component';

describe('ValidationDemandeComponent', () => {
  let component: ValidationDemandeComponent;
  let fixture: ComponentFixture<ValidationDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
