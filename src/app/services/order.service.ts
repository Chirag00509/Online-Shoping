import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  addOrder(item: any) : Observable<any>  {
    return this.http.post("http://localhost:3000/orders", item)
  }

  getOrderHistory(id: any) : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/orders/?id="+ id)
  }

}
