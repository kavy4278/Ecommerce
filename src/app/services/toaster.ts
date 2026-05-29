import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { CartToastComponent } from '../components/cart-toast/cart-toast';

@Injectable({
  providedIn: 'root',
})
export class Toaster {
  toaster = inject(HotToastService);

  success(message : string){
    this.toaster.success(message);
  }

  cartSuccess(message: string) {
    this.toaster.show(CartToastComponent, {
      data: { message },
      duration: 3000,
      position: 'top-center',
      style: {
        padding: '0',
        background: 'transparent',
        boxShadow: 'none',
      }
    });
  }

  error(message : string){
    this.toaster.error(message);
  }
}
