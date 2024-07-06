import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { OnlineClassesRoutingModule } from './online-classes-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadingInterceptorService } from 'src/app/layout/service/loading-interceptor.service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json')
}


@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: DialogService, useClass: DialogService }
],
  imports: [
    CommonModule,
    OnlineClassesRoutingModule,
    TranslateModule.forRoot({
      loader: {
          //defaultLanguage: 'es',
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
      },
  })
  ]
})
export class OnlineClassesModule { 

  constructor() {
    registerLocaleData(localeEs);
  }
}
