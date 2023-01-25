import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppAddPatientComponent } from './main-app-add-patient.component';

describe('MainAppAddPatientComponent', () => {
  let component: MainAppAddPatientComponent;
  let fixture: ComponentFixture<MainAppAddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppAddPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAppAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
