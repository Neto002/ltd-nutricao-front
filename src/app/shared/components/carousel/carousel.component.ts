import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  carouselImages: string[] = [
    "../../../assets/images/cImage1.jpeg",
    "../../../assets/images/cImage2.jpeg",
    "../../../assets/images/cImage3.jpeg"
  ]

  constructor() {
  }

  ngOnInit(): void {
    //this.loadCarouselImages();
  }

  loadCarouselImages(): void {
    this.carouselImages = [
      "../../../assets/images/cImage1.jpeg",
      "../../../assets/images/cImage2.jpeg",
      "../../../assets/images/cImage3.jpeg"
    ]
  }
}
