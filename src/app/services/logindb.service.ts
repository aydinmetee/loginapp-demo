import { Injectable } from '@angular/core';
import { DbUsers } from '../models/dbusers'; 
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogindbService {

  constructor(private httpClient:HttpClient) { }

  login2(loginUser:DbUsers){
    let headers=new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
  }


}
