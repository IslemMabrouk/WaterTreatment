import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { MesureService } from './mesure.service';

describe('MesureService', () => {
  let service: MesureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
    });
    service = TestBed.inject(MesureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
