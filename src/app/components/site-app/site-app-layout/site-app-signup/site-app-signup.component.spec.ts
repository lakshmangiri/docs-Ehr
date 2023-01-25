import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAppSignupComponent } from './site-app-signup.component';

describe('SiteAppSignupComponent', () => {
  let component: SiteAppSignupComponent;
  let fixture: ComponentFixture<SiteAppSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAppSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAppSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
