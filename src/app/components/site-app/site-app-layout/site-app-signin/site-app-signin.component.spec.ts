import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAppSigninComponent } from './site-app-signin.component';

describe('SiteAppSigninComponent', () => {
  let component: SiteAppSigninComponent;
  let fixture: ComponentFixture<SiteAppSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAppSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAppSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
