import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselImages: string[] = ["../../../assets/images/cImage1.jpeg", "../../../assets/images/cImage2.jpeg", "../../../assets/images/cImage3.jpeg"]
}
