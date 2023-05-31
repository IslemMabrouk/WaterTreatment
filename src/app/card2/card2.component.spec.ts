import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Card2Component } from './card2.component';

describe('Card2Component', () => {
  let component: Card2Component;
  let fixture: ComponentFixture<Card2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Card2Component ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Card2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
