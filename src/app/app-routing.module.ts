import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import{CheckoutComponent} from './pages/checkout/checkout.component'

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
    component:CheckoutComponent,
    path:'checkout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
