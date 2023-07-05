import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productList: any[] = [];

  grandTotal : number = 0;

  subTotal : number = 0;

  useId? : string | null

  constructor(private router : Router, private cartService : CartService, private orderService : OrderService) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.cartService.getProduct().subscribe((res) => {
      this.productList = res;
    });
    this.grandTotal = this.cartService.getTotalPrice();
    this.subTotal = this.grandTotal + 40;
    this.useId = localStorage.getItem("current User")
  }

  placeOrder() {
    const order = {
      userId : this.useId,
      item : this.productList,
      grandTotal:this.grandTotal,
      orderDate:new Date().toLocaleDateString()
    }
    this.orderService.addOrder(order).subscribe();
    this.router.navigateByUrl("/confirmation");
  }


}
