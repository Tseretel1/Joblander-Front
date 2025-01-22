import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import * as AOS from 'aos';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import { ProfileCardComponent } from "../../shared/components/profile-card/profile-card.component";
@Component({
  selector: 'app-profile',
  imports: [TranslateModule, ProfileCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit,OnDestroy{
  ngOnInit(): void {
    this.getProfile();
    AOS.init({
      duration: 500,      
      easing: 'ease-in-out',
    });
  }

  ngOnDestroy(): void {
    AOS.refreshHard(); 
  }
  constructor(private service : ProfileService){

  }

  userProfile : any= {};
  getProfile(){
    this.service.GetMyProfile().subscribe(
      (resp)=>{
        if(resp.success){
          this.userProfile= resp.obj;
        }
      }
    )
  }

  
}
