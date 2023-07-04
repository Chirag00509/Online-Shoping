import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor( private cartService : CartService ) { }

  productList: any[] = [];

  grandTotal : number = 0;

  subTotal : number = 0;


  currentDate = new Date().toDateString();

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.cartService.getProduct().subscribe((res) => {
      this.productList = res;
    })
    this.grandTotal = this.cartService.getTotalPrice();
    this.subTotal = this.grandTotal + 40;
  }
}
