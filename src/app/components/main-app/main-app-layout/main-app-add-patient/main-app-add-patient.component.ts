import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { patientData } from 'src/app/model/patientData.model';
import { PatientPostServiceService } from 'src/app/service/patientPostService/patient-post-service.service';

@Component({
  selector: 'app-main-app-add-patient',
  templateUrl: './main-app-add-patient.component.html',
  styleUrls: ['./main-app-add-patient.component.scss']
})
export class MainAppAddPatientComponent implements OnInit {

  patient: patientData;
  isLoading = false;
  private mode = "add-patient";
  private postId: string;

  constructor(public postService: PatientPostServiceService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = 'edit-patient';
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
        this.mode = "add-patient";
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm)
  {
    if (form.invalid)
    {
      return;
    }
    this.isLoading = true;
    if (this.mode == 'add-patient')
    {
      this.postService.addPost(
        form.value.title,
        form.value.name,
        form.value.emailId,
        form.value.contactNo,
        form.value.gender,
        form.value.martialStatus,
        form.value.dob,
        form.value.age,
        form.value.weight,
        form.value.height,
        form.value.bmi,
        form.value.bloodGroup,
        form.value.alcoholConsumption,
        form.value.smokingHabits,
        form.value.allergies,
        form.value.currentMedications,
        form.value.pastMedications,
      );
    }
    else
    {
      this.postService.updatePost(
        this.postId,
        form.value.title,
        form.value.name,
        form.value.emailId,
        form.value.contactNo,
        form.value.gender,
        form.value.martialStatus,
        form.value.dob,
        form.value.age,
        form.value.weight,
        form.value.height,
        form.value.bmi,
        form.value.bloodGroup,
        form.value.alcoholConsumption,
        form.value.smokingHabits,
        form.value.allergies,
        form.value.currentMedications,
        form.value.pastMedications
      );
    }
    form.resetForm();
    console.log(form.value);
  }
}
