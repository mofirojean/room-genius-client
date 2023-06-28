import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    InputTextModule,
    CarouselModule
  ],
  exports: [
    ToastModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    InputTextModule,
    CarouselModule
  ]
})
export class HmsSharedModule { }
