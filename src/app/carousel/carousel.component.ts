import {Component, Input, OnInit} from '@angular/core';
import {CarouselImage} from "./models/carousel-image.model";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  slideInterval: number = 5000;

  selectedIndex: number = 0;

  ngOnInit(): void {
    this.autoSlideImages()
  }

  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(i: number): void {
    this.selectedIndex = i;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
