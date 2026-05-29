import { Component, inject } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../models/products';
import { MatIconButton } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { StarRating } from '../../components/star-rating/star-rating';

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, MatIconButton, MatButton, MatIcon, StarRating],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.css',
})
export class MyWishlist {
  store = inject(EcommerceStore);

  togglewishlist(product: Product) {
    this.store.removefromwishlist(product.productName);
  }

  addtocart(product: Product) {
    this.store.addtocart(product);
  }
}
