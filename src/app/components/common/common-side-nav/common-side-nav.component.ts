import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { patientData } from 'src/app/model/patientData.model';
import { PatientPostServiceService } from 'src/app/service/patientPostService/patient-post-service.service';

@Component({
  selector: 'app-common-side-nav',
  templateUrl: './common-side-nav.component.html',
  styleUrls: ['./common-side-nav.component.scss']
})
export class CommonSideNavComponent implements OnInit {

  isLoading = false;
  post: patientData[] = [];
  private postSub: Subscription;

  constructor(public postService: PatientPostServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
    .subscribe((posts: patientData[]) => {
      this.isLoading = false;
      this.post = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  onAddPatientPage()
  {
    this.router.navigateByUrl('/add-patient');
  }

}
