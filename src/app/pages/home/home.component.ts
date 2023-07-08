import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any[] = [];

  searchValue: string = '';


  constructor(private productService: ProductService, private cartService: CartService, private sharedService: SharedService) { }

  ngOnInit(): void {
    debugger;
    this.loadProduct();
    this.findSearchValue();
  }

  loadProduct() {
    debugger;
    this.productService.getAllProducts().subscribe((result) => {
      this.productList = result

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.discountPrice })
      })
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  findSearchValue() {
    this.sharedService.searchValue$.subscribe((value: any) => {
      this.searchValue = value
    })
  }

}
