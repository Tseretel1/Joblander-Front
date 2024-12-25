import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService){ 
  }

  lang:boolean = false;
  en(){
    this.translate.use("en")
    this.lang = true;
    localStorage.setItem('language', 'en');
  }
  geo(){
    this.translate.use("geo")
    this.lang = false;
    localStorage.setItem('language', 'geo');
  }
}
