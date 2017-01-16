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
    this.title = 'Front End Web Development';
    this.subTitle = 'Angular, SASS, Bower, WordPress';
  }

  ngOnInit() {

  }

}
