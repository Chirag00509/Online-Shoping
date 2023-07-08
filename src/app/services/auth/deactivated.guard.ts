import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CheckoutComponent } from "src/app/pages/checkout/checkout.component";
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuardService implements CanDeactivate<CheckoutComponent>{

  constructor(private cartService : CartService) {}
    canDeactivate(component: CheckoutComponent): boolean{

      console.log(component.isFormEmpty());

      if(component.isFormEmpty()) {
        this.cartService.removeAllitem();
      }

      return component.canExit();
    }
}
