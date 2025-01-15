import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './features/header/header.component';
import { MobileHeaderComponent } from './features/mobile-header/mobile-header.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MobileHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Job Lander';

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    const storedLang = localStorage.getItem('lang');
    
    console.log("Stored language from localStorage: ", storedLang);

    if (storedLang === "en") {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      console.log('Language set to English');
    } else {
      this.translate.setDefaultLang('geo');
      this.translate.use('geo');
      console.log('Language set to Georgian');
    }
  }
}
