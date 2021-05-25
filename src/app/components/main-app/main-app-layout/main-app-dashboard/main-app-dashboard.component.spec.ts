import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppDashboardComponent } from './main-app-dashboard.component';

describe('MainAppDashboardComponent', () => {
  let component: MainAppDashboardComponent;
  let fixture: ComponentFixture<MainAppDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
