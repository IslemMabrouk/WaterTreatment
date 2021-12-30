import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCard3Component } from './mini-card3.component';

describe('MiniCard3Component', () => {
  let component: MiniCard3Component;
  let fixture: ComponentFixture<MiniCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
