import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId : string | null = '';

  producList : any;

  updateForm!: FormGroup;

  constructor(private userService : UserService, private formBuilder : FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getUserData();
  }

  initializeForm() {
    this.updateForm = this.formBuilder.group({
      name : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
    })
  }

  getControl(name: any) : AbstractControl | null {
    return this.updateForm.get(name);
  }

  updateform(data: any) {
    this.userId = localStorage.getItem("current User");
    this.userService.updatedUser(this.userId, data).subscribe();

    this.router.navigateByUrl("/home");
  }

  getUserData() {
    this.userId = localStorage.getItem("current User");
    this.userService.getUserById(this.userId).subscribe((res) => {

        this.producList = res
        this.updateForm.patchValue({
          name: this.producList.name,
          email: this.producList.email,
          password: this.producList.password,
        })

    })

  }
}
