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
    console.log(this._router.url);
  }

  ngOnInit() {
    this._router.navigate(['']);
    this._router.navigate(['home']);
  }

  routeChange(e) {
    // console.log(e.path);
    console.log(this._route.snapshot.url);
    // let index = e.path.indexOf('html');
    // console.log(e.path[1]);
    // // console.log(e.path[index]);
    // if(e.path[1].innerText !== 'HOME' || e.path[1].innerText !== '') {
    //   this.isHome = false;
    //   console.log(this.isHome);
    // } else {
    //   this.isHome = true;
    //   console.log(this.isHome);
    // }
  }


}
