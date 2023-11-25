import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptor } from './httpinterceptor.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpinterceptorService', () => {
  let service: HttpRequestInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpRequestInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
