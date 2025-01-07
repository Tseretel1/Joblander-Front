import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import Aos from 'aos';
@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    Aos.init({
      duration: 1000,      
      easing: 'ease-in-out',
      once: true           
    });
  }
  ngOnDestroy(): void {
    Aos.refreshHard(); 
  }
}
