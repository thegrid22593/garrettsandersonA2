import { Component, OnInit } from '@angular/core';
import {WpService} from '../services/wp-service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
  public allWebProjects: any;
  public loading: boolean = false;

  constructor(private _wpService: WpService, private _router: Router) { }

  ngOnInit() {

    if(!localStorage.getItem('projects')) {
      this.loading = true;
      this._wpService.getAllWebProjects().then(result => {
        this.allWebProjects = result;
        // localStorage.setItem('projects', JSON.stringify(this.allWebProjects));
        console.log(this.allWebProjects);
        this.loading = false;
      });
    } else {
      this.loading = false;
      this.allWebProjects = JSON.parse(localStorage.getItem('projects'));
      console.log(this.allWebProjects);
    }
  }

  workDetail(slug) {
    this._router.navigate(['work', slug]);
  }

}
