import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppMyDashboardComponent } from './main-app-my-dashboard.component';

describe('MainAppMyDashboardComponent', () => {
  let component: MainAppMyDashboardComponent;
  let fixture: ComponentFixture<MainAppMyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppMyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAppMyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
