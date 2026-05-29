import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/all',
    pathMatch: 'full',
  },
  {
    path: 'products',
    redirectTo: 'products/all',
    pathMatch: 'full',
  },
  {
    path: 'products/:category',
    loadComponent: () =>
      import('./pages/products-grid/products-grid')
        .then(m => m.ProductsGrid),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./pages/my-wishlist/my-wishlist')
        .then(m => m.MyWishlist),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart')
        .then(m => m.Cart),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login')
        .then(m => m.Login),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup')
        .then(m => m.Signup),
  },
  {
    path: 'product/:name',
    loadComponent: () =>
      import('./pages/product-detail/product-detail')
        .then(m => m.ProductDetail),
  },
];