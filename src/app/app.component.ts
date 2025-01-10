import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './features/header/header.component';
import { MobileHeaderComponent } from './features/mobile-header/mobile-header.component';
import { FooterComponent } from "./features/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MobileHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Job Lander';

  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('language');
    const defaultLang = storedLang ? storedLang : 'geo';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  ngOnInit() {
  }

}
