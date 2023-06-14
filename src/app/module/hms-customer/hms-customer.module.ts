import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HmsCustomerRoutingModule } from './hms-customer-routing.module';
import { HmsCustomerComponent } from './components/dashboard/hms-customer.component';


@NgModule({
  declarations: [
    HmsCustomerComponent
  ],
  imports: [
    CommonModule,
    HmsCustomerRoutingModule
  ]
})
export class HmsCustomerModule { }
