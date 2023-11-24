import { TestBed } from '@angular/core/testing';

import { PedidosService } from './pedidos.service';
import { HttpClientModule } from '@angular/common/http';


describe('PedidosService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PedidosService]
    });
  });

  it('should be created', () => {
    const service: PedidosService = TestBed.inject(PedidosService);
    expect(service).toBeTruthy();
  });
});
