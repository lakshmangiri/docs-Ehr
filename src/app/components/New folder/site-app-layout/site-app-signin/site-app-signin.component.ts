import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-site-app-signin',
  templateUrl: './site-app-signin.component.html',
  styleUrls: ['./site-app-signin.component.scss']
})
export class SiteAppSigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm)
  {
    //
    //this.authService.loginUser(form.value.email, form.value.password);
    console.log(form.value)
  }

}
