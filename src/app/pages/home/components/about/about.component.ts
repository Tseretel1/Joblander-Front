import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
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
    });
    this.purposeIMG = this.images[this.currentIndex];

    this.intervalId = setInterval(() => {
      this.changeImage();
    }, 5000); 
  }
  ngOnDestroy(): void {
    Aos.refreshHard(); 
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
