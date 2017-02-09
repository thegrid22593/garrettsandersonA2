import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styleUrls: ['./add-testimonial.component.scss']
})
export class AddTestimonialComponent implements OnInit {
  public testimonialAuthor: string;
  public testimonialClient: string;
  public testimonialContent: string;

  constructor(private _nodeService: NodeService) { }

  ngOnInit() {

  }

  onSubmit() {
    let newTestimonial = {
      testimonialAuthor: this.testimonialAuthor,
      testimonialClient: this.testimonialClient,
      testimonialContent: this.testimonialContent
    }

    this._nodeService.addTestimonial(newTestimonial).subscribe(error => {
      console.log(error);
    });
  }

}
