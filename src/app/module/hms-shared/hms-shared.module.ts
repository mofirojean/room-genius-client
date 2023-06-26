import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    InputTextModule
  ],
  exports: [
    ToastModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    InputTextModule
  ]
})
export class HmsSharedModule { }
