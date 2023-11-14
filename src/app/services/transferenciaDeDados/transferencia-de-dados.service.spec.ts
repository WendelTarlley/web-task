import { TestBed } from '@angular/core/testing';

import { TransferenciaDeDadosService } from './transferencia-de-dados.service';

describe('DataService', () => {
  let service: TransferenciaDeDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaDeDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
