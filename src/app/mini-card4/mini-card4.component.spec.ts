import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MiniCard4Component } from './mini-card4.component';
import { ContactService } from '../services/contact.service';

describe('MiniCard4Component', () => {
  let component: MiniCard4Component;
  let fixture: ComponentFixture<MiniCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCard4Component ],
      imports: [HttpClientTestingModule],
      providers: [ContactService]
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
