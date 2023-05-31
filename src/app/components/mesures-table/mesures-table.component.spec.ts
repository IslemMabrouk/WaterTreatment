import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MesuresTableComponent } from './mesures-table.component';

describe('MesuresTableComponent', () => {
  let component: MesuresTableComponent;
  let fixture: ComponentFixture<MesuresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: {} } } // Mock the ActivatedRoute with a simple snapshot
        }
      ],
      declarations: [ MesuresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesuresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
