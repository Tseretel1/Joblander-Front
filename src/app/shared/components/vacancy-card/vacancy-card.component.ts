import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VacanyModel } from '../../models/vacany-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-card',
  imports: [TranslateModule,CommonModule],
  templateUrl: './vacancy-card.component.html',
  styleUrl: './vacancy-card.component.scss'
})
export class VacancyCardComponent {

  @Input()
  vacany!: VacanyModel;
}
