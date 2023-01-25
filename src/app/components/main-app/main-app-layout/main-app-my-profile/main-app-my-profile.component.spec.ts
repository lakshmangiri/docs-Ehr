import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppMyProfileComponent } from './main-app-my-profile.component';

describe('MainAppMyProfileComponent', () => {
  let component: MainAppMyProfileComponent;
  let fixture: ComponentFixture<MainAppMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAppMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
