import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesuresTableComponent } from './mesures-table.component';

describe('MesuresTableComponent', () => {
  let component: MesuresTableComponent;
  let fixture: ComponentFixture<MesuresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
