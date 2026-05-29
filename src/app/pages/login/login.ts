import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  store = inject(EcommerceStore);
  router = inject(Router);

  email = '';
  password = '';
  hidePassword = true;

  onSubmit() {
    if (!this.email || !this.password) return;
    const success = this.store.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/products/all']);
    }
  }
}
