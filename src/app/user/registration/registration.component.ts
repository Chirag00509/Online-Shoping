import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private userService : UserService, private router : Router) {}

  registration(data: any) {
    this.userService.registration(data).subscribe();
    this.router.navigateByUrl('/user/login');
  }
}
