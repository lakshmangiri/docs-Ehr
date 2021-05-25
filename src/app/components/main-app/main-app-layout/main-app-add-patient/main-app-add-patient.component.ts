import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-app-add-patient',
  templateUrl: './main-app-add-patient.component.html',
  styleUrls: ['./main-app-add-patient.component.scss']
})
export class MainAppAddPatientComponent implements OnInit {

  isLoading = false;
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]}),
      name: new FormControl(null, {validators:[Validators.required,]}),
      emailId: new FormControl(null, {validators:[Validators.required,Validators.email,]}),
      contactNo: new FormControl(null, {validators:[Validators.required,]}),
      gender: new FormControl(null, {validators:[Validators.required,]}),
      martialStatus: new FormControl(null, {validators:[Validators.required,]}),
      dob: new FormControl(null, {validators:[Validators.required,]}),
      age: new FormControl(null, {validators:[Validators.required,]}),
      height: new FormControl(null, {validators:[Validators.required,]}),
      weight: new FormControl(null, {validators:[Validators.required,]}),
      bmi: new FormControl(null, {validators:[Validators.required,]}),
      bloodGroup: new FormControl(null, {validators:[Validators.required,]}),
      alcoholConsumption: new FormControl(null, {validators:[]}),
      smokingHabits: new FormControl(null, {validators:[]}),
      allergies: new FormControl(null, {validators:[]}),
      currentMedications: new FormControl(null, {validators:[]}),
      pastMedications: new FormControl(null, {validators:[]}),
    });
  }

  onSavePost()
  {
    console.log(this.form.value);
  }

}
