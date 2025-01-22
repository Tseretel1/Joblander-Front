import { Component, OnInit } from '@angular/core';
import { ProfileCardService } from './profile-card.service';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent implements OnInit{

  constructor(private service : ProfileCardService){

  }
  ngOnInit(): void {
    this.getProfile();
  }

  userProfile : any= {};
  getProfile(){
    this.service.GetMyProfile().subscribe(
      (resp)=>{
          this.userProfile= resp.obj;
      }
    )
  }
}
