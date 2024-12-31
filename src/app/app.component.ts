import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './features/header/header.component';
import { MobileHeaderComponent } from './features/mobile-header/mobile-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MobileHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Job Lander';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.languageDetect();
  }

  languageDetect(){
    this.translate.setDefaultLang("geo");
    const storedLang = localStorage.getItem('language');
    if(storedLang =="en"){
      console.log(storedLang);
      this.translate.use("en")
    }
    else{
      console.log(storedLang);
      this.translate.use("geo")
    }
  }
}
