import { Component, OnInit } from '@angular/core';
import {WpService} from '../services/wp-service';

import * as $ from 'jquery';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public allWebProjects: any;

  constructor(private _wpService: WpService) { }

  ngOnInit() {
    this._wpService.getAllWebProjects().then(result => {
      this.allWebProjects = result;
      console.log(this.allWebProjects);
    });
  }

}
