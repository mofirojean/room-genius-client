import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmsCustomerComponent } from './components/dashboard/hms-customer.component';

const routes: Routes = [{ path: '', component: HmsCustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HmsCustomerRoutingModule { }
