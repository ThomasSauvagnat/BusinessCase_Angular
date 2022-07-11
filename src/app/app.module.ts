import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { JwtInterceptor } from './config/jwtInterceptor';
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
