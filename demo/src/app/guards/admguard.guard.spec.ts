import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { admguardGuard } from './admguard.guard';

describe('admguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => admguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
