import { Component, OnDestroy, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit , OnDestroy{
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    Aos.init({
      duration: 100,
      easing: 'ease-in-out',
    });
  }
  ngOnDestroy(): void {
    Aos.refreshHard(); 
  }
}
