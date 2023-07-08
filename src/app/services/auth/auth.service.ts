import { Injectable } from '@angular/core';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cart: any;

  constructor(private cartService: CartService) { }

  isLoggedIn() {
    const userId = localStorage.getItem("current User");

    if (userId) {
      return true;
    }
    return false;
  }

  cartEmpty(): boolean {
    this.cart = this.cartService.getProductLength()
      if (this.cart > 0) {
        return true;
      }
      return false;
  }
}
