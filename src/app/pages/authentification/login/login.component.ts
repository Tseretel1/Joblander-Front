import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
import { SharedServiceService } from '../../../shared/services/shared-service.service';
import { LoginService } from './login.service';
import {User} from './login.service' 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TranslateModule,CommonModule],
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm :FormGroup;

  constructor(private fb :FormBuilder, private sharedService :SharedServiceService,private service:LoginService){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  valueForm (){
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false, 
    });
  }

  visiblemodal:boolean = false;
  login(){
    if(this.loginForm.valid){
      const user : User ={
        email :this.loginForm.value.email,
        password : this.loginForm.value.password
      }
      this.service.login(user).subscribe(
        (resp)=>{
          if(resp.success){
            this.visiblemodal = true;
            setTimeout(() => {
              this.visiblemodal = false;
            }, 1000);
            this.sharedService.userLogin("",true);
            localStorage.setItem('token', resp.message);
          }
          else{
            this.sharedService.openModal(true);
            this.sharedService.userLogin("EMAILORPASSINCORRECT", false);
          }
        },
        (error)=>{
        }
      )
    }
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }
}
