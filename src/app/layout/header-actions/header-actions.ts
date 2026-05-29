import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { RouterLink } from "@angular/router";
import { MatBadge } from '@angular/material/badge'
import { MatMenuModule } from '@angular/material/menu';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, RouterLink, MatBadge, MatMenuModule],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.css',
})
export class HeaderActions {
  store = inject(EcommerceStore);

  isInWishlist(): boolean {
    return this.store.wishlistitems().length > 0;
  }

  logout() {
    this.store.logout();
  }
}
