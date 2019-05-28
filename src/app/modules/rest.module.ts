import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './interceptor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    InterceptorModule,
  ]
})

export class RestModule { }
