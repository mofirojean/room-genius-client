import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmsAdminComponent } from './components/dashboard/hms-admin.component';

const routes: Routes = [{ path: '', component: HmsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HmsAdminRoutingModule { }
