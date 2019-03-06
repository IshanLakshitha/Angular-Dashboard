import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageCustomerComponent} from './manage-customer/manage-customer.component';
import {ManageItemsComponent} from './manage-items/manage-items.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {NotFoundComponent} from './not-found/not-found.component';


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
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
    // full / prefix
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
