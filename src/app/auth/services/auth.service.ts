import { AuthMockService } from './auth-mock.service';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly authMockService: AuthMockService,
    private readonly router: Router
  ) {}

  login(user: User): string {
    return this.authMockService.login(user);
  }
  logout(): void {
    localStorage.clear();
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
