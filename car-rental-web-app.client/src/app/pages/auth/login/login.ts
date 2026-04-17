import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

interface LoginForm {
  email: string;
  password: string;
  remember: boolean;
}

interface LoginErrors {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {

  form: LoginForm = {
    email: '',
    password: '',
    remember: false,
  };

  errors: LoginErrors = {};
  loginError: string = '';
  isLoading = false;
  showPassword = false;

  constructor(private router: Router) {}

  validateEmail(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.email) {
      this.errors.email = 'Email address is required.';
    } else if (!emailRegex.test(this.form.email)) {
      this.errors.email = 'Please enter a valid email address.';
    } else {
      delete this.errors.email;
    }
  }

  private validateForm(): boolean {
    this.errors = {};
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.email) {
      this.errors.email = 'Email address is required.';
      valid = false;
    } else if (!emailRegex.test(this.form.email)) {
      this.errors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!this.form.password) {
      this.errors.password = 'Password is required.';
      valid = false;
    }

    return valid;
  }

  onLogin(): void {
    this.loginError = '';
    if (!this.validateForm()) return;

    this.isLoading = true;

    // TODO: replace with real auth service call
    setTimeout(() => {
      this.isLoading = false;
      // Simulate success — navigate to home or dashboard
      // this.router.navigate(['/']);

      // Simulate error for demo:
      // this.loginError = 'Invalid email or password. Please try again.';
    }, 1400);
  }

  loginWithGoogle(): void {
    // TODO: integrate Google OAuth
    console.log('Google OAuth initiated');
  }
}