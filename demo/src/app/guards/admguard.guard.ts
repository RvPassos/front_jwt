import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const admguardGuard: CanActivateFn = (route, state) => {
  
  let loginService = inject(LoginService);
  let roteador = inject(Router);

  if(!loginService.hasPermission('ADMIN')) {
    roteador.navigate(['/admin']);
    return false;
  } else
    return true;

};
