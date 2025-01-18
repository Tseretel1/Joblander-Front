import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import * as  AOS from 'aos';

@Component({
  selector: 'app-filter',
  imports: [
    MatSelectModule,      
    MatIconModule,  
    TranslateModule,
    ReactiveFormsModule,
    MatSelect,
    MatIcon,
    NgClass,
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit,OnDestroy, AfterViewChecked{
  ngAfterViewChecked() {
    AOS.refresh();
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.init({
      duration: 500,      
      easing: 'ease-in-out',
    });
  }
  ngOnDestroy(): void {
    AOS.refreshHard(); 
  }
  filtersvisible:boolean = false;
  showfilters(){
    if(!this.filtersvisible)
    {
      this.filtersvisible = true;
    }
    else{
      this.filtersvisible = false
    }
  }
}
