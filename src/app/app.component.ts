import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  searchText:any;
  totalItem : number = 0 ;

  constructor(private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res) => {
      this.totalItem = res.length
    })
  }


}
