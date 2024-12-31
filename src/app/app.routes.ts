import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { publish } from 'rxjs';
import { PublishComponent } from './pages/publish/publish.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';

export const routes: Routes = [
  { path: 'jobs', component: HomeComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/jobs' } 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
