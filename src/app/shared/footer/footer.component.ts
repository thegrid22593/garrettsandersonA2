import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footerbar',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public copyrightDate;
  constructor() { }

  ngOnInit() {
    this.copyrightDate = new Date();
    this.copyrightDate = this.copyrightDate.getFullYear();
  }

}
