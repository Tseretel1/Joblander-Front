import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { SharedServiceService } from '../../shared/services/shared-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Routes ,appRoutes} from '../../shared/routes';
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
  routes: Routes = appRoutes;

  constructor(private sharedService: SharedServiceService, private router:Router){

  }
  modalSubscription: Subscription | undefined;
  modalRegisterSub: Subscription | undefined;
  modalLoginSub: Subscription | undefined;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.modalSubscription = this.sharedService.modalOpened$.subscribe((data) => {
      if(data){
        this.openModal();        
      }
    });

    this.modalRegisterSub = this.sharedService.modalRegister$.subscribe(({ data, userRegistered }) => {
      this.ModalMessage = data;
      if(userRegistered){
        this.switchAuth();
      }
    });
    this.modalLoginSub = this.sharedService.login$.subscribe(({ data, loggedIn }) => {
      this.ModalMessage = data;
      if(loggedIn){
        this.router.navigate([this.routes.profile]);       
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
  
  switchText = "DONTHAVEACCOUNT";
  switchButtonText = "REGISTER"
  loginVisible: boolean = false;
  switchAuth() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.loginVisible) {
      this.loginVisible = false;
      this.switchButtonText = "REGISTER";
      this.switchText = "DONTHAVEACCOUNT";
    } else {
      this.loginVisible = true;
      this.switchButtonText = "LOGIN";
      this.switchText = "HAVEACCOUNT";
    }
  }

  ModalMessage: string = '';
  modalVisible: boolean = false;
  

  closeModal() {
    this.modalVisible = false;
    this.sharedService.openModal(false);
  }
  openModal(){
    this.modalVisible = true;
  }
}
