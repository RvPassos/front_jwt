import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProdutosService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProdutosService]
    });
  });

  it('should be created', () => {
    const service: ProdutosService = TestBed.inject(ProdutosService);
    expect(service).toBeTruthy();
  });
});
