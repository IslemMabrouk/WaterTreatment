import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MiniCard2Component } from './mini-card2.component';
import { DemandeService } from '../services/demande.service';

describe('MiniCard2Component', () => {
  let component: MiniCard2Component;
  let fixture: ComponentFixture<MiniCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCard2Component ],
      imports: [HttpClientTestingModule],
      providers: [DemandeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
