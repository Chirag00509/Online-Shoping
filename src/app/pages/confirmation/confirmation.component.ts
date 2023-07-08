import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private orderService: OrderService, private router: ActivatedRoute, private cartService: CartService) { }

  productList: any[] = [];

  grandTotal: number = 0;

  subTotal: number = 0;

  orderId: number = 0;

  currentDate = new Date().toDateString();

  ngOnInit() {
    console.log(this.router.snapshot);
    this.orderId = this.router.snapshot.params['id'];
    this.loadProduct(this.orderId);
  }

  loadProduct(id: any) {
    this.orderService.getOrder(id).subscribe((res) => {
      this.productList = res;
    })
    this.grandTotal = this.cartService.getTotalPrice();
    this.subTotal = this.grandTotal + 40;
    this.cartService.removeAllitem();
  }
}
