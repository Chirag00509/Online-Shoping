import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<any[]>  {
    //debugger;
    return this.http.get<any[]>("http://localhost:3000/products");
  }

  getProduct(id : any): Observable<any>{
    return this.http.get<any>("http://localhost:3000/products/"+id);
  }
}
