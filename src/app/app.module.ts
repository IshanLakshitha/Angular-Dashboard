import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRouterModule} from './app.router.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomerComponent,
    ManageItemsComponent,
    PlaceOrderComponent,
    ViewOrderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
