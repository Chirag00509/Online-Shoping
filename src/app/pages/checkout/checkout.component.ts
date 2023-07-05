import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productList: any[] = [];

  grandTotal : number = 0;

  subTotal : number = 0;

  constructor(private router : Router, private cartService : CartService) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.cartService.getProduct().subscribe((res) => {
      this.productList = res;
    });
    this.grandTotal = this.cartService.getTotalPrice();
    this.subTotal = this.grandTotal + 40;
  }

  navigation() {
    this.router.navigateByUrl("/confirmation")
  }


}
