import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-site-app-signup',
  templateUrl: './site-app-signup.component.html',
  styleUrls: ['./site-app-signup.component.scss']
})
export class SiteAppSignupComponent implements OnInit {

  hide = true;

  constructor(public authService: UserAuthService) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm)
  {
    if (form.invalid)
    {
      return;
    }
    this.authService.createUser(form.value.name, form.value.email, form.value.password);
    console.log(form.value)
  }

}
