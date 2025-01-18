import { Component } from '@angular/core';
import { appRoutes, Routes } from '../../shared/routes';
import { companyList, CompanyModel, VacanyModel } from '../../shared/models/vacany-model';
import * as  AOS from 'aos';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { IntroductionComponent } from "./components/introduction/introduction.component";

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    TranslateModule,
    RecruiterComponent,
    CompanyCardComponent,
    IntroductionComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    
  routes: Routes = appRoutes;
    
  vacanys: VacanyModel[] = [];
  ngOnInit(): void {
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: false, 
    });
    setTimeout(() => {
      this.createCompanies();
    }, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }

  company: CompanyModel[] = [];

  createCompanies() {
    const companyNames = [
      'Tech Solutions Ltd.',
      'Innovative Designs Inc.',
      'Global Enterprises',
      'Creative Labs',
      'NextGen Technologies',
    ];
  
  
    companyList.length = 0;
  
    for (let i = 0; i < 3; i++) {
      const companyName = companyNames[i % companyNames.length];
      const logo = "https://logodix.com/logo/2157969.jpg";
  
      const company = new CompanyModel(companyName, logo);
      companyList.push(company);
      this.company = companyList;
    }
  }
  

  optionVisible :boolean = false;
  openOption(){
    if(!this.optionVisible){
      this.optionVisible = true;
    }
    else{
      this.optionVisible = false;
    }
  }

  scrollToCompany() {
    const element = document.getElementById('home');
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}
