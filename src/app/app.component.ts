import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isHome: boolean;
  constructor(private _router:Router, private _location: Location, private _route: ActivatedRoute) {
    console.log('app component', this._router.url);
  }

  ngOnInit() {
    this._router.navigate(['']);
    this._router.navigate(['home']);
    this.routeChange();
  }

  routeChange() {
    let url: string;
    this._router.events.subscribe((val) =>{
      let url = val.url;
      // console.log('url', url);

      if(url == '/home' || url == '' || url == '/') {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
      // console.log(this.isHome);
    });
  }


}
