import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCard4Component } from './mini-card4.component';

describe('MiniCard4Component', () => {
  let component: MiniCard4Component;
  let fixture: ComponentFixture<MiniCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCard4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
