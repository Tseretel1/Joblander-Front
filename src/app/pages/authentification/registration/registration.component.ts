import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
import { RegisterService, User } from './register.service';
import { SharedServiceService } from '../../../shared/services/shared-service.service';

@Component({
  selector: 'app-registration',
  imports: [TranslateModule, ReactiveFormsModule],
  styleUrl: './registration.component.scss',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RegisterService, private sharedService :SharedServiceService) {
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      Email: ['', Validators.required,],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }



  userExists :string = "USEREXISTS";
  youRegistered: string = "YOUREGISTEREDSECCESSFULLY";
  register(){
    if(this.registerForm.valid){
      const userObj : User ={
        name: this.registerForm.value.Name,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.Email,
        phoneNumber: this.registerForm.value.phoneNumber,
        password: this.registerForm.value.password,
      }  
      this.service.registration(userObj).subscribe(
        (resp) => {
          if (resp.success) {
            this.sharedService.userRegistration(this.youRegistered, true);
          } else {
            this.sharedService.userRegistration(this.userExists, false);
          }
          this.sharedService.openModal(true);
          if (resp.success) {
            this.registerForm.reset();
          }
        },
        (error) => {
          console.error("Registration failed:", error);
          this.sharedService.userRegistration("Something went wrong. Please try again.", false);
          this.sharedService.openModal(true);
        }
      );
      
    }
  }
}
