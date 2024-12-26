import { Component, Input } from '@angular/core';
import { VacanyModel } from '../../models/vacany-model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-vacancy-card',
  imports: [TranslateModule],
  templateUrl: './vacancy-card.component.html',
  styleUrl: './vacancy-card.component.scss'
})
export class VacancyCardComponent {
  @Input()
  vacany!: VacanyModel;
}
