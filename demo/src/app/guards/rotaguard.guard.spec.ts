import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rotaguardGuard } from './rotaguard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('rotaguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ],
      imports: [HttpClientTestingModule],
    });

    
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
