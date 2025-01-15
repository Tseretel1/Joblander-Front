import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../../shared/routes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private url = URL;
  constructor(private http :HttpClient) 
  { }
  
  registration(reg: User): Observable<any> {
    return this.http.post(this.url + 'registration', reg, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export interface User{
  name: string;
  lastName: string;
  email: string;
  password: string; 
  phoneNumber: string;
}