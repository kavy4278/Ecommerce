import { Component, inject } from '@angular/core';
import { HotToastRef } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-cart-toast',
  template: `
    <div class="flex gap-x-2 w-[300px] h-[56px] items-center relative px-4 bg-white rounded-md shadow-lg overflow-hidden">
      <div class="flex items-center justify-center text-xl">
        <span class="drop-shadow-md">
          <span class="bell-animation inline-block"> 🔔 </span>
        </span>
      </div>
      <div class="font-medium text-gray-800">{{ message }}</div>
      <div
        class="absolute left-0 bottom-0 right-0 h-1 bg-blue-500 rounded-b shrink-line-animation"
        [style.--shrink-line-animation-duration]="duration + 'ms'"
      ></div>
    </div>
  `
})
export class CartToastComponent {
  private toastRef = inject(HotToastRef);

  get message(): string {
    return (this.toastRef.data as any)?.message || 'Added to cart';
  }

  get duration(): number {
    return this.toastRef.getToast().duration || 3000;
  }
}
