import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
//import { product } from '../product-data';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('/db.json').subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log('Error fetching product data:', error);
      }
    );
  }
}
