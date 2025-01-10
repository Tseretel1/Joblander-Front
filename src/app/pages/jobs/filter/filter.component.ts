import { Component, OnInit } from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-filter',
  imports: [
    MatSelectModule,      
    MatIconModule,  
    TranslateModule,
    ReactiveFormsModule,
    MatSelect,
    MatIcon,
    NgClass
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']

})
export class FilterComponent implements OnInit{
  ngOnInit(): void {
    this.selectedOption = new FormControl('1');
  }
  selectedOption = new FormControl('1');

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
