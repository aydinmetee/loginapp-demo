import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() { }

  public login(userInfo:User){
    if(userInfo.username=="admin"&&userInfo.password=="12345"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",userInfo.username);
  }
    else{
      alert("Wrong password or username.");
    }
}

  public isLoggedIn(){
    return this.loggedIn;
  }

  public logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn= false;
  }

}
