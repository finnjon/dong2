import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from './create/create.component';
import { ApiComponent } from './api/api.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const APP_ROUTES: Routes = [
  { path: '', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'api', component: ApiComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard' }
];

// export const appRoutingProviders: any[] = [
//   AuthGuard
// ];

export const routing = RouterModule.forRoot(APP_ROUTES);
