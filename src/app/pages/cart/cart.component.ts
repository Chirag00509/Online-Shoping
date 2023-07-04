import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : any = [];
  grandTotal! : number;

  constructor(private cartService : CartService,private router:Router) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }


  emptycart() {
    this.cartService.removeAllitem();
  }

  removeItem(item : any) {
    this.cartService.removeCartItem(item);
  }
  checkout() {
    this.router.navigate(['/checkout'])
  }
}
