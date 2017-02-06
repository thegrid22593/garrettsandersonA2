import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges {
  constructor(private _route: ActivatedRoute, private _router: Router, private location: Location) { }
  @Output() routeChange = new EventEmitter();
  @Input() isHome:boolean;
  ngOnInit() {
  }

  fireRouteChange(e) {
    this.routeChange.emit();
  }

  updateState() {
  }

  ngOnChanges() {
    this.isHome = this.isHome;
    console.log('nav', this.isHome);
  }
}
