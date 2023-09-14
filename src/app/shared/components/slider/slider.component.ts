import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
interface Image {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'ngx-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private timer: any;

  constructor() { }

  ngOnInit(): void {
    console.log('slider');
    this.startTimer();
    
  }
  slides = [
    { image: 'van1.jpg', title: 'Van 1 Description' },
    { image: 'van2.jpg', title: 'Van 2 Description' },
    { image: 'van3.jpg', title: 'Van 3 Description' }
  ];

  startTimer() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 5 seconds
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide + this.slides.length - 1) % this.slides.length;
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
