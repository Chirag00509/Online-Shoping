import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  productList: any[] = [];
  userId? : string | null;

  constructor(private orderService : OrderService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.userId = localStorage.getItem("current User");
    this.orderService.getOrderHistory(this.userId).subscribe((res) => {
      console.log(res);
      this.productList = res;
    })
  }
}
