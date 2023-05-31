import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContratService } from './contrat.service';

describe('ContratService', () => {
  let service: ContratService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
