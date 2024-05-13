import { Component } from '@angular/core';
import {CarouselImage} from "../../carousel/models/carousel-image.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  carouselImages: CarouselImage[] = [
    {
      imageSrc: 'assets/images/cImage1.jpeg',
      imageAlt: 'image 1'
    },
    {
      imageSrc: 'assets/images/cImage2.jpeg',
      imageAlt: 'image 2'
    },
    {
      imageSrc: 'assets/images/cImage3.jpeg',
      imageAlt: 'image 3'
    }
  ]
}
