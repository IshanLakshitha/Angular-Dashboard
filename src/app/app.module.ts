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

// const appRouters: Routes = [
//   {
//     path: 'dashboard',
//     component: DashboardComponent
//   } ,
//   {
//     path: 'manage-customer',
//     component: ManageCustomerComponent
//   } ,
//   {
//     path: 'manage-items',
//     component: ManageItemsComponent
//   } ,
//   {
//     path: 'place-order',
//     component: PlaceOrderComponent
//   } ,
//   {
//     path: 'view-order',
//     component: ViewOrderComponent
//   },
//   {
//     path: '',
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//     // full / prefix
//   },
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
//
//
// ];

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
    // RouterModule.forRoot(appRouters)
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
