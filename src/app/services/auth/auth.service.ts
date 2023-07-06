import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const userId = localStorage.getItem("current User");

    if(userId) {
      return true;
    }

    return false;
  }
}
