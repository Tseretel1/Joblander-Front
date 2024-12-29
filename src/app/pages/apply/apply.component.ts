import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VacanyModel } from '../home/models/vacany-model';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-apply',
  imports: [CommonModule,TranslateModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.scss'
})
export class ApplyComponent implements OnInit{
  vacany!: VacanyModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['vacany']) {
        this.vacany = JSON.parse(params['vacany']);
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
