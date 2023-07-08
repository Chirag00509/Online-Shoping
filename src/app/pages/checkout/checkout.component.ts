import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productList: any[] = [];

  grandTotal: number = 0;

  subTotal: number = 0;

  useId?: string | null

  orderId: number = 0;

  checkoutPage! : FormGroup;

  constructor(private router: Router, private cartService: CartService, private orderService: OrderService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadProduct();
  }

  initializeForm() {
    this.checkoutPage = this.formBuilder.group({
      name : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required, Validators.email ]),
      address: new FormControl('', [ Validators.required ]),
      city: new FormControl('', [ Validators.required ]),
      state: new FormControl('', [ Validators.required ]),
      zip: new FormControl('', [ Validators.required ]),
      cname: new FormControl('', [ Validators.required ]),
      cnumber: new FormControl('', [ Validators.required ]),
      emonth: new FormControl('', [ Validators.required, Validators.min(1), Validators.max(12) ]),
      expyear: new FormControl('', [ Validators.required ]),
      cvv: new FormControl('', [ Validators.required, Validators.max(3), Validators.min(3) ]),

    })
  };

  getControl(name: any) : AbstractControl | null {
    return this.checkoutPage.get(name);
  }


  loadProduct() {
    this.cartService.getProduct().subscribe((res) => {
      this.productList = res;
    });
    this.grandTotal = this.cartService.getTotalPrice();
    this.subTotal = this.grandTotal + 40;
    this.useId = localStorage.getItem("current User")
  }

  placeOrder(data: any) {
    const order = {
      userId: this.useId,
      cutomerName: data.firstname,
      cutomerEmail: data.email,
      cutomerAddress: data.address,
      item: this.productList,
      grandTotal: this.subTotal,
      orderDate: new Date().toLocaleDateString()
    }

    this.orderService.addOrder(order).subscribe((res) => {
      this.orderId = res.id;
      this.router.navigate(["/confirmation", this.orderId]);
    });
  }

  canExit() : boolean {
    if(this.isFormEmpty()) {
      console.log("Hello");

      return  confirm('You have unsaved changes. Do you really want to discard these changes?');
    }

    return true;
  }


  isFormEmpty(): boolean {
    const formValues = this.checkoutPage.value;
    return (
      formValues.name === '' ||
      formValues.email === '' ||
      formValues.address === '' ||
      formValues.city === '' ||
      formValues.state === '' ||
      formValues.zip === '' ||
      formValues.cname === '' ||
      formValues.cnumber === '' ||
      formValues.emonth === '' ||
      formValues.expyear === '' ||
      formValues.cvv === ''
    );
  }


}
