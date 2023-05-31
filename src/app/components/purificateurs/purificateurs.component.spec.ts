import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PurificateursComponent } from './purificateurs.component';
import { ProductService } from 'src/app/services/product.service';

describe('PurificateursComponent', () => {
  let component: PurificateursComponent;
  let fixture: ComponentFixture<PurificateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurificateursComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurificateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
