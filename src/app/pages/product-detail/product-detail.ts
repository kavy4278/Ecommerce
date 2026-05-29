import { Component, inject, input, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { StarRating } from '../../components/star-rating/star-rating';
import { Review } from '../../models/review';

@Component({
  selector: 'app-product-detail',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterLink,
    BackButton,
    StarRating
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  store = inject(EcommerceStore);

  name = input<string>('');

  product = computed(() => {
    const decodedName = decodeURIComponent(this.name());
    return this.store.products().find(p => p.productName === decodedName);
  });

  reviews = computed(() => {
    const p = this.product();
    if (!p) return [];
    return this.store.getProductReviews(p.productName);
  });

  averageRating = computed(() => {
    const r = this.reviews();
    if (r.length === 0) return 0;
    const sum = r.reduce((acc, rev) => acc + rev.rating, 0);
    return Math.round((sum / r.length) * 10) / 10;
  });

  // Review form state
  reviewRating = signal(5);
  reviewComment = signal('');

  quantity = signal(1);

  isInWishlist = computed(() => {
    const p = this.product();
    if (!p) return false;
    return this.store.wishlistitems().some(w => w.productName === p.productName);
  });

  increaseQty() {
    this.quantity.update(q => q + 1);
  }

  decreaseQty() {
    this.quantity.update(q => q > 1 ? q - 1 : 1);
  }

  addToCart() {
    const p = this.product();
    if (p) {
      this.store.addtocart(p, this.quantity());
    }
  }

  toggleWishlist() {
    const p = this.product();
    if (!p) return;
    if (this.isInWishlist()) {
      this.store.removefromwishlist(p.productName);
    } else {
      this.store.addtowishlist(p);
    }
  }

  setRating(rating: number) {
    this.reviewRating.set(rating);
  }

  submitReview() {
    const p = this.product();
    const user = this.store.currentUser();
    if (!p || !user) return;

    const review: Review = {
      productName: p.productName,
      userName: user.name,
      userEmail: user.email,
      rating: this.reviewRating(),
      comment: this.reviewComment(),
      date: new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    const success = this.store.addReview(review);
    if (success) {
      this.reviewRating.set(5);
      this.reviewComment.set('');
    }
  }
}
