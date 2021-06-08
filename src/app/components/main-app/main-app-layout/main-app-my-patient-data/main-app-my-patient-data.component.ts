import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { patientData } from 'src/app/model/patientData.model';
import { PatientPostServiceService } from 'src/app/service/patientPostService/patient-post-service.service';

@Component({
  selector: 'app-main-app-my-patient-data',
  templateUrl: './main-app-my-patient-data.component.html',
  styleUrls: ['./main-app-my-patient-data.component.scss']
})
export class MainAppMyPatientDataComponent implements OnInit {

  patient: patientData;
  private postId: string;
  isLoading = false;

  constructor(public postService: PatientPostServiceService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.postId = paramMap.get("postId");
        this.isLoading = true;
        this.postService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.patient = {
            id: postData._id,
            title: postData.title,
            name: postData.name,
            emailId: postData.emailId,
            contactNo: postData.contactNo,
            gender: postData.gender,
            martialStatus: postData.martialStatus,
            dob: postData.dob,
            age: postData.age,
            weight: postData.weight,
            height: postData.height,
            bmi: postData.bmi,
            bloodGroup: postData.bloodGroup,
            alcoholConsumption: postData.alcoholConsumption,
            smokingHabits: postData.smokingHabits,
            allergies: postData.allergies,
            currentMedications: postData.currentMedications,
            pastMedications: postData.pastMedications,
          };
        });
      }
      else
      {
        console.log('False data');
      }
    });
  }


}
