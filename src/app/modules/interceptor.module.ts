import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ]
})

export class InterceptorModule { }
