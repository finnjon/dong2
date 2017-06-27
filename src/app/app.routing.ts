import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from './create/create.component';
import { CallbackComponent } from './callback/callback.component';
import { ApiComponent } from './api/api.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component';
import { CREATE_ROUTES} from './create/create.routes';
import { AuthGuard } from './auth.guard';

const APP_ROUTES: Routes = [
  { path: '', component: SignupComponent, pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard], children: CREATE_ROUTES },
  { path: 'edit/:id', component: CreateComponent, canActivate: [AuthGuard], children: CREATE_ROUTES },
  { path: 'api', component: ApiComponent, canActivate: [AuthGuard] },
  { path: 'review', component: ReviewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
