import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any = [];

  productList = new BehaviorSubject<any>([])

  constructor() { }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product : any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product : any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);

  }

  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((products : any) => {
      grandTotal += products.originalPrice
    })

    return grandTotal;
  }

  removeCartItem(product : any) {
    this.cartItemList.map((products : any, index: any) => {
      if(product.id === products.id) {
        this.cartItemList.splice(index,1)
      }
      this.productList.next(this.cartItemList);
    })
  }

  removeAllitem() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
