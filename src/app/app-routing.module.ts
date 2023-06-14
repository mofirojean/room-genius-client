import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'customer', loadChildren: () => import('./module/hms-customer/hms-customer.module').then(m => m.HmsCustomerModule) }, { path: 'admin', loadChildren: () => import('./module/hms-admin/hms-admin.module').then(m => m.HmsAdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
