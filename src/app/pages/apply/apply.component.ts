import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { VacanyModel } from '../../shared/models/vacany-model';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe(params => {
      if (params['vacany']) {
        this.vacany = JSON.parse(params['vacany']);
      }
    });
  }
}
