import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

const routes: Routes = [
  {
      path : 'user',
      loadChildren:() => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:"",
    redirectTo:"/user/login",
    pathMatch:'full'
  },
  {
    path: "home",
    component : HomeComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path: 'details/:id',
    component : ProductDetailsComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
