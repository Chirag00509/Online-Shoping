import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  registration(data: any[]): Observable<any[]> {
    return this.http.post<any[]>("http://localhost:3000/user", data)
  }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/user");
  }


  getUserById(id: any): Observable<any>  {
    return this.http.get<any>("http://localhost:3000/user/"+ id);
  }

  updatedUser(id: any, updatedUser: any[]): Observable<any[]> {
    return this.http.put<any>("http://localhost:3000/user/"+ id, updatedUser);
  }
}
