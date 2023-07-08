import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup

  constructor(private router : Router, private userService : UserService, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
    })
  }

  getControl(name: any) : AbstractControl | null {
    return this.loginForm.get(name);
  }


  navigatePage() {
    this.router.navigateByUrl('/user/registration')
  }

  login(data: any) {
    console.log(data);

    this.userService.getUser().subscribe((users: any[]) => {
      const user = users.find(u => u.email === data.email && u.password === data.password);
      if(user) {
        localStorage.setItem("current User", user.id.toString());
        this.router.navigateByUrl('/home');
      } else {
        alert("Your email and password dose not match");
      }
    })
  }
}
