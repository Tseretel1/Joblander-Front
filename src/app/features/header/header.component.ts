import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { appRoutes,Routes } from '../../shared/routes';
@Component({
  selector: 'app-header',
  imports: [TranslateModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  routes: Routes = appRoutes;
  constructor(private translate: TranslateService){ 
  }
  ngOnInit(): void {
    this.langDetect();
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
  en(){
    this.translate.use("en")
    this.lang = false;
    localStorage.setItem('lang', 'en');
  }
  geo(){
    this.translate.use("geo")
    this.lang = true;
    localStorage.setItem('lang', 'geo');
  }
}
