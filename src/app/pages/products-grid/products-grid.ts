import { Component, signal, input, computed, output, effect, ViewChild, ElementRef, inject } from '@angular/core';
import { Product } from '../../models/products';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatDrawerContent } from '@angular/material/sidenav'
import { MatNavList, MatListItem, MatList, MatListItemTitle } from '@angular/material/list'
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../ecommerce-store';
import { StarRating } from '../../components/star-rating/star-rating';

@Component({    
  selector: 'app-products-grid',
  imports: [MatButton, MatAnchor, MatIcon, MatSidenav, MatSidenavContainer, MatSidenavContent, MatDrawerContent, MatList, MatListItem, MatNavList, MatListItemTitle, RouterLink, MatIconButton, StarRating],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  @ViewChild('content', { read: ElementRef }) content?: ElementRef;

  category = input<string>('all');
   categories = signal<string[]>([
    'All',
    'Mobiles',
    'Laptops',
    'Shoes',
    'Watches',
    'Mens Clothing',
    'Womens Clothing',
    'Kids Clothing',
    'Mens Shoes',
    'Womens Shoes',
    'Bags',
    'Fashion Accessories'
  ]);

  store = inject(EcommerceStore);
  
  addtocartclicked = output<Product>();

  isInWishlist(product: Product) {
    return this.store.wishlistitems().some(p => p.productName === product.productName);
  }

  togglewishlist(product: Product){
    if(this.isInWishlist(product)){
        this.store.removefromwishlist(product.productName);
    }
    else{
        this.store.addtowishlist(product);
    }
  }

  filteredproducts = computed(() => {
    const filterCat = this.category().toLowerCase();
    if (filterCat === 'all') {
      return this.store.products(); 
    }
    return this.store.products().filter((p) => p.category.toLowerCase() === filterCat); 
  })

   addtocart(product: Product) {
    this.store.addtocart(product);
  }
  
  constructor() {
    effect(() => {
      const cat = this.category(); 
      this.store.setCategory(cat);
      
      setTimeout(() => {
        const content = document.querySelector('mat-sidenav-content');
        if (content) {
          content.scrollTo({ top: 0, behavior: 'smooth' });
          content.scrollTop = 0;
        }
      }, 50);
    });
  }
}
