import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from './environment/environment.development';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { HttpInterceptorService } from '@interceptors/http-interceptor.service';

import { LoadingSpinnerComponent } from '@components/loading-spinner/loading-spinner.component';
import { LoadingInterceptorService } from '@interceptors/loading-interceptor.service';
import { LoadingService } from '@services/loading/loading.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
    declarations: [
        AppComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutModule,
        DialogModule,
        ButtonModule,
        DynamicDialogModule,
        HttpClientModule,
        TableModule,
        CalendarModule,
        ReactiveFormsModule
    ],
    providers: [
        DialogService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true },
        { provide: LOCALE_ID, useValue: 'es-PE' },
        LoadingService
    ],
    bootstrap: [AppComponent],
  
  
})
export class AppModule { }
