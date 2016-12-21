import { Routes, RouterModule } from "@angular/router";
import { CreateStartComponent } from './create-start/create-start.component';
import { Create1Component } from './create-1/create-1.component';
import { Create2Component } from './create-2/create-2.component';
import { Create3Component } from './create-3/create-3.component';
import { Create4Component } from './create-4/create-4.component';
//import { AuthGuard } from './auth.guard';

export const CREATE_ROUTES: Routes = [
  { path: '', component: CreateStartComponent, pathMatch: 'full' },
  { path: 'create1', component: Create1Component },
  { path: 'create2', component: Create2Component },
  { path: 'create3', component: Create3Component },
  { path: 'create4', component: Create4Component }
];
