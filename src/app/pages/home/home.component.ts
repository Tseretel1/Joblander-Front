import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { MobileHeaderComponent } from "../../features/mobile-header/mobile-header.component";
import { VacancyCardComponent } from "./components/vacancy-card/vacancy-card.component";
import { VacanyModel } from './models/vacany-model';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, MobileHeaderComponent, VacancyCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vacanys: VacanyModel[] = [];

  ngOnInit(): void {
    this.createVacancys();
  }

  createVacancys() {
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

    for (let i = 0; i < 15; i++) {
      const title = vacancyTitle[i % vacancyTitle.length];
      const vacancyPhoto = `https://res.cloudinary.com/ds1q7oiea/image/upload/v1729175304/odvhx1dy8ievkzxhkdoo.webp`;
      const publisherPhoto = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`; 
      const description = descriptions[i % descriptions.length];
      const jobDescription = jobDescriptions[i % jobDescriptions.length];
      const publisherName = publisherNames[i % publisherNames.length];

      const vacancy = new VacanyModel(
        title,
        vacancyPhoto,
        description,
        jobDescription,
        publisherName,
        publisherPhoto
      );

      this.vacanys.push(vacancy);
    }
  }

  flashlightStyle: any = {};

  onMouseMove(event: MouseEvent): void {
    this.flashlightStyle = {
      left: `${event.clientX - 50}px`,  // Adjust 50px for centering the light
      top: `${event.clientY - 50}px`,   // Adjust 50px for centering the light
    };
  }
}
