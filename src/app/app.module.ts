import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FilterPipe } from './filter.pipe';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CanDeactivateGuardService } from './services/auth/deactivated.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    FilterPipe,
    ConfirmationComponent,
    OrderHistoryComponent,
    ProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
