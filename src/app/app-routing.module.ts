import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {component: LandingPageComponent, path: "home"},
  { component: BookingComponent, path: "booking" },
  { path: 'customer', loadChildren: () => import('./module/hms-customer/hms-customer.module').then(m => m.HmsCustomerModule) }, 
  { path: 'admin', loadChildren: () => import('./module/hms-admin/hms-admin.module').then(m => m.HmsAdminModule) },
  { path: "" , pathMatch: "full", redirectTo: "/home"},
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
