import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;

  readonly imageSizes = IMAGES_SIZES;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
