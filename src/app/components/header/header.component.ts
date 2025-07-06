import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  showMobileMenu = false;
  showServices = false;
  isServicesActive = false;
  isDarkMode = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkScreenSize();
    this.trackRouteChanges();

    // Load saved mode
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    if (!this.showMobileMenu) {
      this.showServices = false;
    }
  }

  toggleServices() {
    this.showServices = !this.showServices;
  }

  navigateAndClose(path: string) {
    this.router.navigate([path]);
    this.showMobileMenu = false;
    this.showServices = false;
  }

  private trackRouteChanges() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        this.isServicesActive = url.includes('/laser-cutting') || url.includes('/fabrication');
      });
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = event.target.checked;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

}
