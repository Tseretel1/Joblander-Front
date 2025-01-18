import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-introduction',
  imports: [TranslateModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,      
      easing: 'ease-in-out',
      once: false           
    });
    this.purposeIMG = this.images[this.currentIndex];

    this.intervalId = setInterval(() => {
      this.changeImage();
    }, 5000); 
  }
  ngOnDestroy(): void {
    AOS.refreshHard(); 
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  purposeIMG: string = '';
  purposeIMG1: string = 'assets/photos/purpose.jpg';
  purposeIMG2: string = 'assets/photos/purpose2.jpg';
  purposeIMG3: string = 'assets/photos/purpose3.jpg';

  images: string[] = [this.purposeIMG1, this.purposeIMG2, this.purposeIMG3];

  currentIndex: number = 0;
  private intervalId: any;

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.purposeIMG = this.images[this.currentIndex];
  }
}
