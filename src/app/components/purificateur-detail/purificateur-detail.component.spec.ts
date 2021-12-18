import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurificateurDetailComponent } from './purificateur-detail.component';

describe('PurificateurDetailComponent', () => {
  let component: PurificateurDetailComponent;
  let fixture: ComponentFixture<PurificateurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurificateurDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurificateurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
