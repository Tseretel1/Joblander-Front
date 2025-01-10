import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-header',
  imports: [CommonModule,TranslateModule,RouterLink,RouterLinkActive],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('300ms', style({ width: '0%',}))
      ])
    ]),
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent  implements OnInit{
  constructor(private translate: TranslateService){ 
  }
  ngOnInit(): void {
    this.translate.use('en').subscribe(() => {
      this.lang = true;
    });
  }
  lang:boolean = false;
  en(){
    this.translate.use("en")
    this.lang = true;
    localStorage.setItem('lang', 'en');
  }
  geo(){
    this.translate.use("geo")
    this.lang = false;
    localStorage.setItem('lang', 'geo');
  }

  navbarvisible :boolean = false; 
  showNavbar(){
    this.navbarvisible = true;
  }
  hideNavbar(){
    this.navbarvisible = false;
  }
}
