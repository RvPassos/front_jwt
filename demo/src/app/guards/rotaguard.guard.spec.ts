import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rotaguardGuard } from './rotaguard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('rotaguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [rotaguardGuard],
    });

    
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
