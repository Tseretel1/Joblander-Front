import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
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
    localStorage.setItem('language', 'en');
  }
  geo(){
    this.translate.use("geo")
    this.lang = false;
    localStorage.setItem('language', 'geo');
  }
}
