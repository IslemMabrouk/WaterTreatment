import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailContactComponent } from './email-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmailContactComponent', () => {
  let component: EmailContactComponent;
  let fixture: ComponentFixture<EmailContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailContactComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
