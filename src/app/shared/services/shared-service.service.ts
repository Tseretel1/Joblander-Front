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

  private modalText = new BehaviorSubject<any>(null);
  modalText$ = this.modalText.asObservable();
  
  
  updateModaltext(data: string = "") {
    this.modalText.next(data);
  }
}
