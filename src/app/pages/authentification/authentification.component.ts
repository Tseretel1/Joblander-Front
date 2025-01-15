import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { SharedServiceService } from '../../shared/services/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentification',
  imports: [
    TranslateModule,
    RegistrationComponent,
    LoginComponent,
    CommonModule,
    ModalComponent,
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss',
})
export class AuthentificationComponent implements OnInit, OnDestroy, AfterViewChecked{

  constructor(private sharedService: SharedServiceService){

  }
  modalSubscription: Subscription | undefined;
  modalTextSubscription: Subscription | undefined;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.modalSubscription = this.sharedService.modalOpened$.subscribe((data) => {
      if(data){
        this.openModal();        
      }
    });

    this.modalTextSubscription = this.sharedService.modalText$.subscribe(({ data, userRegistered }) => {
      this.ModalMessage = data;
      if(userRegistered){
        this.switchAuth();
      }
    });
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: false,
    });
  }


  
  ngOnDestroy(): void {
    AOS.refreshHard();
    this.modalSubscription?.unsubscribe();
  }
  
  ngAfterViewChecked() {
    AOS.refresh();
  }
  
  switchText = "LOGIN"
  
  loginVisible: boolean = false;
  switchAuth() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.loginVisible) {
      this.loginVisible = false;
      this.switchText = "LOGIN";
    } else {
      this.loginVisible = true;
      this.switchText = "REGISTER";
    }
  }

  ModalMessage: string = '';
  modalVisible: boolean = false;
  

  closeModal() {
    this.modalVisible = false;
  }
  openModal(){
    this.modalVisible = true;
  }
}
