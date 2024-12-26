import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './http-loader.factory';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    [importProvidersFrom(BrowserAnimationsModule)] ,
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory, 
          deps: [HttpClient],
        }
      })
    ),
    ...appConfig.providers, provideAnimationsAsync(),
  ]
})