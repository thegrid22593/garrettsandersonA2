import { Component, OnInit } from '@angular/core';
import { WpService } from '../services/wp-service';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public testimonials: any;
  constructor(private _wpService: WpService) { }

  ngOnInit() {
    this._wpService.getAllTestimonails().then(result => {
      this.testimonials = result;
    });
  }

}
