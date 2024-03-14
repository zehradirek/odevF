import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'techstockf';
  constructor(private authService: AuthService, private router : Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
