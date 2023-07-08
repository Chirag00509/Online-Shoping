import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register!: FormGroup

  constructor(private userService : UserService, private router : Router, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.register = this.formBuilder.group({
      name : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
    })
  }

  getControl(name: any) : AbstractControl | null {
    return this.register.get(name);
  }

  registration(data: any) {
    this.userService.registration(data).subscribe();
    this.router.navigateByUrl('/user/login');
  }
}
