import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppMyPatientDataComponent } from './main-app-my-patient-data.component';

describe('MainAppMyPatientDataComponent', () => {
  let component: MainAppMyPatientDataComponent;
  let fixture: ComponentFixture<MainAppMyPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppMyPatientDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAppMyPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
