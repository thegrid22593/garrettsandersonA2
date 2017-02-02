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
  public backgroundImage: string;
  
  constructor() {
    this.backgroundImage = '../assets/main-bg.jpg';
    this.title = 'Responsive Front End Web Development';
    this.subTitle = 'HTML, CSS, JavaScript, Angular, SASS, Bower, Performance, WordPress';
  }

  ngOnInit() {
    $('#click').on('click', function(e) {
      e.preventDefault();
      console.log('working');
      let section = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(section).offset().top - 55
      }, 400);
    });

    $(window).on('scroll', function() {
      if($(window).scrollTop() >= 1) {
        $('.main-nav').addClass('scrolled');
      } else {
        $('.main-nav').removeClass('scrolled');
      }
    });
  }
}
