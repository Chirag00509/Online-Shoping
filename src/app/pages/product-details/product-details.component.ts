import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: any = [];
  productName: string = "";

  constructor(private route: ActivatedRoute, private product:ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');

    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData= result

      this.productData.forEach((a : any) =>  {
        Object.assign(a, {quantity : 1, total : a.discountPrice})
      })
    })
  }

  addToCart(data: any) {
    data.quantity = 1;
    data.total = data.discountPrice;
    this.cartService.addToCart(data)
  }
}
