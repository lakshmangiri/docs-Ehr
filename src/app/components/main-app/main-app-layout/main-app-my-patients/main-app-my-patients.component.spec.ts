import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppMyPatientsComponent } from './main-app-my-patients.component';

describe('MainAppMyPatientsComponent', () => {
  let component: MainAppMyPatientsComponent;
  let fixture: ComponentFixture<MainAppMyPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppMyPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAppMyPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
