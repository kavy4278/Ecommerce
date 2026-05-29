import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { StarRating } from '../../components/star-rating/star-rating';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BackButton,
    StarRating
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  store = inject(EcommerceStore);

  increaseQty(productName: string, currentQty: number) {
    this.store.updateCartQuantity(productName, currentQty + 1);
  }

  decreaseQty(productName: string, currentQty: number) {
    if (currentQty > 1) {
      this.store.updateCartQuantity(productName, currentQty - 1);
    }
  }

  removeItem(productName: string) {
    this.store.removeFromCart(productName);
  }

  saveForLater(productName: string) {
    const item = this.store.cartitems().find(i => i.product.productName === productName);
    if (item) {
      this.store.addtowishlist(item.product);
      this.store.removeFromCart(productName);
    }
  }

  formatPrice(price: number): string {
    return price.toLocaleString('en-IN');
  }
}
