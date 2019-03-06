import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {Route, RouterModule, Routes} from '@angular/router';

const appRouters: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  } ,
  {
    path: 'manage-customer',
    component: ManageCustomerComponent
  } ,
  {
    path: 'manage-items',
    component: ManageItemsComponent
  } ,
  {
    path: 'place-order',
    component: PlaceOrderComponent
  } ,
  {
    path: 'view-order',
    component: ViewOrderComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomerComponent,
    ManageItemsComponent,
    PlaceOrderComponent,
    ViewOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
