import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userAuthData } from '../model/userAuthData.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

createUser(name: string, email: string, password: string)
{
  const UserAuthData: userAuthData = {name: name, email: email, password: password};
  this.http.post('http://localhost:3000/api/user/signup', UserAuthData)
  .subscribe(response => {
    console.log(response);
  });
}

login(email: string, password: string)
{
  const UserAuthData: userAuthData = {email: email, password: password};
  this.http.post('http://localhost:3000/api/user/signin', UserAuthData)
  .subscribe(response => {
    console.log(response);
  });
}
}
