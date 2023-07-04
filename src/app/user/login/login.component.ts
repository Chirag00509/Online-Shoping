import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, private userService : UserService) {}

  navigatePage() {
    this.router.navigateByUrl('/user/registration')
  }

  login(data: any) {
    this.userService.getUser().subscribe((users: any[]) => {
      const user = users.find(u => u.email === data.email && u.password === data.password);
      if(user) {
        this.router.navigateByUrl('/home');
      } else {
        alert("Your email and password dose not match");
      }
    })
  }
}
