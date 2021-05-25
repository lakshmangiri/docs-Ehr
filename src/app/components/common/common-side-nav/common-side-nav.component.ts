import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-side-nav',
  templateUrl: './common-side-nav.component.html',
  styleUrls: ['./common-side-nav.component.scss']
})
export class CommonSideNavComponent implements OnInit {

  isLoading = false;
  private postSub: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddPatientPage()
  {
    this.router.navigateByUrl('/add-patient');
  }

}
