import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { product } from '../data-type';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: any
  productName:string="";
  constructor(private route: ActivatedRoute, private product:ProductService) { }
  ngOnInit(): void {
        let productId=this.route.snapshot.paramMap.get('id')
        productId && this.product.getProduct(productId).subscribe((result)=>{
          this.productData= result;
          
        })
  }
  
  
}
