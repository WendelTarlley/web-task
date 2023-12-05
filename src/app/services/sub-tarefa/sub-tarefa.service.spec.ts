/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubTarefaService } from './sub-tarefa.service';

describe('Service: SubTarefa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubTarefaService]
    });
  });

  it('should ...', inject([SubTarefaService], (service: SubTarefaService) => {
    expect(service).toBeTruthy();
  }));
});
