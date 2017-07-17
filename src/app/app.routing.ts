import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from './create/create.component';
import { CallbackComponent } from './callback/callback.component';
import { ApiComponent } from './api/api.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component';
import { EditorComponent } from './editor/editor.component';
import { CreatePoolComponent } from './create-pool/create-pool.component';
import { CREATE_ROUTES} from './create/create.routes';
import { AuthGuard } from './auth.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard], children: CREATE_ROUTES },
  { path: 'create-pool', component: CreatePoolComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: CreateComponent, canActivate: [AuthGuard], children: CREATE_ROUTES },
  { path: 'api', component: ApiComponent, canActivate: [AuthGuard] },
  { path: 'review', component: ReviewComponent, canActivate: [AuthGuard] },
  { path: 'editor/:id', component: EditorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'signup' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
