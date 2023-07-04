import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchValue = new BehaviorSubject<string>("");

  searchValue$ = this.searchValue.asObservable();

  setSearchValue(value : string) {
    this.searchValue.next(value);
  }

  constructor() { }
}
