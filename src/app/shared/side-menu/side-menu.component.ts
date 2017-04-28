import { Component, OnInit, Input, Output,  OnChanges } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnChanges {
  @Input() public isCollapsed:boolean;

  constructor() {
    console.log(this.isCollapsed);
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.isCollapsed = this.isCollapsed;
  }

}
