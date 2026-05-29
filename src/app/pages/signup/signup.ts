import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EcommerceStore } from '../../ecommerce-store';
import { Toaster } from '../../services/toaster';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  store = inject(EcommerceStore);
  router = inject(Router);
  toaster = inject(Toaster);

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  hidePassword = true;
  hideConfirm = true;

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) return;

    if (this.password !== this.confirmPassword) {
      this.toaster.error('Passwords do not match');
      return;
    }

    if (this.password.length < 6) {
      this.toaster.error('Password must be at least 6 characters');
      return;
    }

    const success = this.store.signup({
      name: this.name,
      email: this.email,
      password: this.password
    });

    if (success) {
      this.router.navigate(['/products/all']);
    }
  }
}
