import { Component, OnInit } from '@angular/core';

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

  }

}
