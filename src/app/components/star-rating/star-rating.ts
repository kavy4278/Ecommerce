import { Component, input, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  imports: [MatIconModule],
  template: `
    <div class="flex items-center">
      @for (star of stars(); track $index) {
        <mat-icon style="font-size: 18px; width: 18px; height: 18px; color: #f59e0b;">
          {{ star }}
        </mat-icon>
      }
      <span class="text-sm text-blue-600 ml-2 hover:underline cursor-pointer">{{ numericRating() }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
    }
  `]
})
export class StarRating {
  rating = input<string>('0 out of 5 stars');

  numericRating = computed(() => {
    const match = this.rating().match(/^([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
  });

  stars = computed(() => {
    const rating = this.numericRating();
    const result: string[] = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        result.push('star');
      } else if (rating >= i - 0.5) {
        result.push('star_half');
      } else {
        result.push('star_border');
      }
    }

    return result;
  });
}
