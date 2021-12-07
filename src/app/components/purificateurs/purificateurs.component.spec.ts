import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurificateursComponent } from './purificateurs.component';

describe('PurificateursComponent', () => {
  let component: PurificateursComponent;
  let fixture: ComponentFixture<PurificateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurificateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurificateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
