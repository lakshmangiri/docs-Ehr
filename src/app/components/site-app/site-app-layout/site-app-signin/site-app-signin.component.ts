import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/service/UserAuthService/user-auth.service';

@Component({
  selector: 'app-site-app-signin',
  templateUrl: './site-app-signin.component.html',
  styleUrls: ['./site-app-signin.component.scss']
})
export class SiteAppSigninComponent implements OnInit {

  constructor(public authService: UserAuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm)
  {
    if (form.invalid)
    {
      return;
    }
    this.authService.login(form.value.email, form.value.password);
    console.log(form.value)
  }

}
