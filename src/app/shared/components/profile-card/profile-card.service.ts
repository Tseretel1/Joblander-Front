import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {URL} from "../../routes"
@Injectable({
  providedIn: 'root'
})
export class ProfileCardService {

  private url = URL;
  
  constructor(private http :HttpClient) { }
  GetMyProfile(): Observable<any> {
    return this.http.get(this.url + 'profile');
  }
}
