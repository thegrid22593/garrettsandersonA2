import { Component, OnInit } from '@angular/core';
import { WpService } from '../services/wp-service';
import * as $ from 'jquery';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})



export class TestimonialsComponent implements OnInit {
  public testimonials: any;
  public config: Object;
  constructor(private _wpService: WpService) { }

  ngOnInit() {
    this._wpService.getAllTestimonails().then(result => {
      this.testimonials = result;
      console.log(this.testimonials);
    });

    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: 4000,
      loop: true
    }

  }

}
