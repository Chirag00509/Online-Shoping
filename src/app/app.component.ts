import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  searchText:any;
  totalItem : number = 0 ;

  constructor(private cartService : CartService, private sharedService : SharedService) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res) => {
      this.totalItem = res.length
    })
  }

  onSearchChange() {
    this.sharedService.setSearchValue(this.searchText);
  }

}
