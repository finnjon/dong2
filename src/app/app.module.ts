import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
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
import { Create6Component } from './create/create-6/create-6.component';
import { ReviewComponent } from './review/review.component';
import { HttpService } from './http.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CallbackComponent } from './callback/callback.component';
// import { QuillModule } from 'ngx-quill';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

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
    Create5Component,
    Create6Component,
    ReviewComponent,
    CallbackComponent
  ],
  imports: [
    // QuillModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FlashMessagesModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
       AuthGuard, Auth, DropletService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
