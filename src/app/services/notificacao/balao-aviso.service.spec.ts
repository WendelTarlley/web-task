import { TestBed } from '@angular/core/testing';

import { BalaoAvisoService } from './balao-aviso.service';

describe('BalaoAvisoService', () => {
  let service: BalaoAvisoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalaoAvisoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
