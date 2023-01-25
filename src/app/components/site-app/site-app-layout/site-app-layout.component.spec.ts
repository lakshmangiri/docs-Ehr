import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAppLayoutComponent } from './site-app-layout.component';

describe('SiteAppLayoutComponent', () => {
  let component: SiteAppLayoutComponent;
  let fixture: ComponentFixture<SiteAppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAppLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
