import { Component, Input } from '@angular/core';
import { CompanyModel } from '../../../../shared/models/vacany-model';

@Component({
  selector: 'app-company-card',
  imports: [],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  @Input()
  company!: CompanyModel;
}
