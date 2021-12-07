import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoucisseursComponent } from './adoucisseurs.component';

describe('AdoucisseursComponent', () => {
  let component: AdoucisseursComponent;
  let fixture: ComponentFixture<AdoucisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoucisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoucisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
