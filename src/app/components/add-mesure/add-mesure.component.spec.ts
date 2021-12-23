import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMesureComponent } from './add-mesure.component';

describe('AddMesureComponent', () => {
  let component: AddMesureComponent;
  let fixture: ComponentFixture<AddMesureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMesureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
