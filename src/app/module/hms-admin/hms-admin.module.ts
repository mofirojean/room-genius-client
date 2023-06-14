import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HmsAdminRoutingModule } from './hms-admin-routing.module';
import { HmsAdminComponent } from './components/dashboard/hms-admin.component';


@NgModule({
  declarations: [
    HmsAdminComponent
  ],
  imports: [
    CommonModule,
    HmsAdminRoutingModule
  ]
})
export class HmsAdminModule { }
