import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, TranslateModule],
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm :FormGroup;

  constructor(private fb :FormBuilder){
    this.loginForm = this.fb.group({
      Email: ['', Validators.required,],
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

  ngOnDestroy(): void {
    AOS.refreshHard();
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }
}
