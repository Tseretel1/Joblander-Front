import { Component, OnDestroy, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileCardComponent } from "../../shared/components/profile-card/profile-card.component";
import { appRoutes, Routes } from '../../shared/routes';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { SharedServiceService } from '../../shared/services/shared-service.service';

@Component({
  selector: 'app-profile',
  imports: [TranslateModule, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit,OnDestroy{
  constructor(private router: Router,private sharedService :SharedServiceService){
  }
  ngOnInit(): void {
    AOS.init({
      duration: 500,      
      easing: 'ease-in-out',
    });
  }
  ngOnDestroy(): void {
    AOS.refreshHard(); 
  }
  routes: Routes = appRoutes;
  exit(){
    localStorage.removeItem('token');
    this.sharedService.userLogin("",false);
    this.router.navigate([this.routes.auth])
  }
}
