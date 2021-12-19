import { TestBed } from '@angular/core/testing';

import { MesureService } from './mesure.service';

describe('MesureService', () => {
  let service: MesureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
