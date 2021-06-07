import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-tool-bar',
  templateUrl: './nav-tool-bar.component.html',
  styleUrls: ['./nav-tool-bar.component.scss']
})
export class NavToolBarComponent {

  isMenuOpen = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onNavBarToggle()
  {
    console.log('On Toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
  }

}
