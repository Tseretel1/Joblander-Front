import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-recruiter',
  imports: [TranslateModule, CommonModule],
  templateUrl: './recruiter.component.html',
  styleUrl: './recruiter.component.scss'
})
export class RecruiterComponent implements OnInit{
  ngOnInit(): void {
    AOS.init({
      duration: 300,      
      easing: 'ease-in-out',
    });
  }
}
