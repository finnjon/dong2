import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ApiComponent } from './api/api.component';
import { AuthGuard } from "./auth.guard";
import { Auth } from "./auth.service";
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ApiComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AUTH_PROVIDERS, AuthGuard, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
