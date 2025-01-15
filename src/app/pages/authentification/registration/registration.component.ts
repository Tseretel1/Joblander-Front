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
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { SharedServiceService } from '../../../shared/services/shared-service.service';

@Component({
  selector: 'app-registration',
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
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
        (resp)=>{
          if(resp.success){
            this.sharedService.openModal(true);
            this.sharedService.updateModaltext(resp.message);
            this.registerForm.reset();
          }
          this.sharedService.openModal(true);
          this.sharedService.updateModaltext(resp.message);
        },
      )
    }
  }
}
