import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { PublishComponent } from './pages/publish/publish.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { JobsComponent } from './pages/jobs/jobs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
