import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isHome: boolean;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    // console.log(this._route.snapshot);
  }
}
