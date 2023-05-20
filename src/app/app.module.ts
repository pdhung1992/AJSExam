import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {Route, RouterOutlet} from "@angular/router";



const appRoutes: Routes = [
]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: []
})
export class AppModule { }
