import {  CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { CartService } from '../cart.service';

export const cartauthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.cartEmpty()){
    return true;
  }
   alert("Your cart is empty! Please add Items..")
   return router.parseUrl('/home');
};
