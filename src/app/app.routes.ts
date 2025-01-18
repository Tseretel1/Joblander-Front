import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublishComponent } from './pages/publish/publish.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserGuard } from './guards.guard';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UserGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
