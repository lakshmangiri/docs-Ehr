import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth-service/user-auth.service';

@Component({
  selector: 'app-site-app-signup',
  templateUrl: './site-app-signup.component.html',
  styleUrls: ['./site-app-signup.component.scss']
})
export class SiteAppSignupComponent implements OnInit {

  hide = true;
  isLoading = false;

  constructor(public authService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm)
  {
    if (form.invalid)
    {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.name, form.value.email, form.value.password);
    form.reset();
    this.router.navigateByUrl("");
    console.log(form.value)
  }

}
