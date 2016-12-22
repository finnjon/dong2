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
import { CreateStartComponent } from './create/create-start/create-start.component';
import { Create1Component } from './create/create-1/create-1.component';
import { Create2Component } from './create/create-2/create-2.component';
import { Create3Component } from './create/create-3/create-3.component';
import { ShowDropletComponent } from './show-droplet/show-droplet.component';
import { DropletService } from './droplet.service';
import { Create4Component } from './create/create-4/create-4.component';
import { Create5Component } from './create/create-5/create-5.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ApiComponent,
    SignupComponent,
    DashboardComponent,
    CreateStartComponent,
    Create1Component,
    Create2Component,
    Create3Component,
    ShowDropletComponent,
    Create4Component,
    Create5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AUTH_PROVIDERS, AuthGuard, Auth, DropletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
