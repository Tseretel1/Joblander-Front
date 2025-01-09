import { Component } from '@angular/core';
import { FilterComponent } from '../home/components/filter/filter.component';
import { AboutComponent } from '../home/components/about/about.component';
import { VacanyModel } from '../home/models/vacany-model';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { VacancyCardComponent } from '../home/components/vacancy-card/vacancy-card.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-jobs',
  imports: [  
    CommonModule,
    VacancyCardComponent,
    RouterLink,
    TranslateModule,
    FilterComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

  vacanys: VacanyModel[] = [];

  ngOnInit(): void {
    this.createVacancys();

    Aos.init({
      duration: 1000,      
      easing: 'ease-in-out',
      once: true           
    });
  }
  ngOnDestroy(): void {
    Aos.refreshHard(); 
  }
  getVacanyData(vc: VacanyModel) {
    return JSON.stringify(vc);  
  }

  trackByVacany(index: number, item: VacanyModel) {
    return item.title; 
  }
  
  createVacancys() {
    Aos.refresh();
    const vacancyTitle = [
      'ოფისის მენეჯერი',
      'გაყიდვების კონსულტანტი',
      'ადმინისტრატორი',
      'ლოგისტიკის ოპერატორი ამერიკულ გადაზიდვებში',
      'ბარის თანამშრომელი',
      'დამყწები მზარეული',
      'ხარისხის კონტროლის მენეჯერი',
      'ბრენდ ამბასადორი- გარე გაყიდვების წარმომადგენელი',
      'გაყიდვების კონსულტანტი',
      'გერმანულენოვანი მარკეტპლეისის ოპერაციების მენეჯერი',
      'ტენდერი- პეტერინარული ულტრაბგერითი სკანერის შეძენა',
    ];

    const publisherNames = [
      'John Doe',
      'Jane Smith',
      'Michael Johnson',
      'Emily Davis',
      'David Wilson',
    ];

    const descriptions = [
      'Join our team of skilled professionals to work on exciting projects.',
      'A great opportunity to develop your skills and advance your career.',
      'Looking for passionate and talented individuals to join our workforce.',
      'We offer competitive salaries and benefits to our employees.',
      'Become a part of a company that values creativity and innovation.',
    ];

    const jobDescriptions = [
      'Develop and maintain applications using cutting-edge technologies.',
      'Collaborate with teams to deliver high-quality products.',
      'Work closely with customers to understand their needs and provide solutions.',
      'Participate in code reviews and ensure code quality.',
      'Lead teams in delivering innovative and scalable solutions.',
    ];

    for (let i = 0; i < 25; i++) {
      const title = vacancyTitle[i % vacancyTitle.length];
      const vacancyPhoto = `https://res.cloudinary.com/ds1q7oiea/image/upload/v1729175304/odvhx1dy8ievkzxhkdoo.webp`;
      const publisherPhoto = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`; 
      const description = descriptions[i % descriptions.length];
      const jobDescription = jobDescriptions[i % jobDescriptions.length];
      const publisherName = publisherNames[i % publisherNames.length];
      const price = 1500;

      const vacancy = new VacanyModel(
        title,
        vacancyPhoto,
        description,
        jobDescription,
        publisherName,
        publisherPhoto,
        price
      );

      this.vacanys.push(vacancy);
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
}
