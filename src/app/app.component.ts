import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Jobfinder';
  constructor(
    private translate: TranslateService
  ) {
  const storedLang = localStorage.getItem('language');
  const defaultLang = storedLang ? storedLang : 'geo';
  this.translate.setDefaultLang(defaultLang);
  this.translate.use(defaultLang);
}
}