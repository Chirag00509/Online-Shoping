import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs'

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

  getProductLength(): number {
   return this.cartItemList.length;
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((products: any) => {
      grandTotal += products.total
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((products: any, index: any) => {
      if (product.id === products.id) {
        this.cartItemList.splice(index, 1)
      }
      this.productList.next(this.cartItemList);
    })
  }

  removeAllitem() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  updateCartQuantity(product: any, quantity: number) {
    const item = this.cartItemList.find((item: any) => item.id == product.id);

    if (item) {
      item.quantity = quantity;
      item.total = item.discountPrice * quantity;
      this.productList.next(this.cartItemList);
    }
  }

}
