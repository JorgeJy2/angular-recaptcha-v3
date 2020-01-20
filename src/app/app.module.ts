import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LdiqNAUAAAAAEFdJAgqdOA1AwImGW-HJ1kRL_l2' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
