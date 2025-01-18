import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  private modalVisible = new BehaviorSubject<any>(null);
  modalOpened$ = this.modalVisible.asObservable();
  
  
  openModal(data: boolean = false) {
    this.modalVisible.next(data);
  }
  private register = new BehaviorSubject<{ data: string; userRegistered: boolean }>({
    data: "",
    userRegistered: false,
  });
  modalRegister$ = this.register.asObservable();
  userRegistration(data: string = "", userRegistered: boolean = false) {
    this.register.next({ data, userRegistered });
  }



  private login = new BehaviorSubject<{ data: string; loggedIn: boolean }>({
    data: "",
    loggedIn: false,
  });
  login$ = this.login.asObservable();
  userLogin(data: string = "", loggedIn: boolean = false) {
    this.login.next({ data, loggedIn });
  }
}
