import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { appRoutes,Routes } from '../../shared/routes';
import { SharedServiceService } from '../../shared/services/shared-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-mobile-header',
  imports: [CommonModule,TranslateModule,RouterLink,RouterLinkActive],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent  implements OnInit{
  routes: Routes = appRoutes;
  constructor(private translate: TranslateService,private sharedService : SharedServiceService){ 
  }
  loginSub: Subscription | undefined;
  userLogged:boolean = false;
  ngOnInit(): void {
    this.langDetect();
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: false, 
    });
    this.loginSub = this.sharedService.login$.subscribe(({ data, loggedIn }) => {
      this.userLogged = loggedIn;
    });
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }

  langDetect(){
    const lang = localStorage.getItem('lang');
    if(lang == 'geo'){
      this.lang = true;
    }
    else{
      this.lang = false
    }
  }

  lang:boolean = false;
  //eseni calke serviceshi gaitane bevr kods imeoreb
  en(){
    localStorage.setItem('lang', 'en');
    this.translate.use("en")
    this.lang = true;
  }
  geo(){
    localStorage.setItem('lang', 'geo');
    this.translate.use("geo")
    this.lang = false;
  }

  navbarvisible :boolean = false; 
  showNavbar(){
    this.navbarvisible = true;
  }
  hideNavbar(){
    this.navbarvisible = false;
  }
}
