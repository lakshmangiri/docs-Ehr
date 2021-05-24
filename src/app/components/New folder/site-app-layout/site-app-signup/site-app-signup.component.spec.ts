import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAppSignupComponent } from './site-app-signup.component';

describe('SiteAppSignupComponent', () => {
  let component: SiteAppSignupComponent;
  let fixture: ComponentFixture<SiteAppSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAppSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAppSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
