import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MiniCard1Component } from './mini-card1.component';
import { UserService } from '../services/user.service';

describe('MiniCard1Component', () => {
  let component: MiniCard1Component;
  let fixture: ComponentFixture<MiniCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCard1Component ],
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
