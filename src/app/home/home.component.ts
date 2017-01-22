import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string;
  public subTitle: string;
  constructor() {
    this.title = 'Responsive Front End Web Development';
    this.subTitle = 'HTML, CSS, JavaScript, Angular, SASS, Bower, Performance, WordPress';
  }

  ngOnInit() {
    $('#click').on('click', function(e) {
      e.preventDefault();
      console.log('working');
      let section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top + 40
      }, 400);
    });
  }
}
