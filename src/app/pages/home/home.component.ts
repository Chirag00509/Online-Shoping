import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any[] = [];

  constructor(private productService : ProductService, private cartService : CartService) {}

  ngOnInit(): void {
    debugger;
    this.loadProduct();
  }

  loadProduct() {
    debugger;
    this.productService.getAllProducts().subscribe((result) => {
      this.productList = result

      this.productList.forEach((a : any) =>  {
        Object.assign(a, {quantity : 1, total : a.originalPrice})
      })
    })
  }

  addToCart(item :any) {
    this.cartService.addToCart(item);
  }

}
