import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { WpService } from '../../services/wp-service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss']
})

export class WorkDetailComponent implements OnInit {
  public activeProject;
  public activeProjectImages = Array;
  public goalsObjectives = Array;
  constructor(private _route: ActivatedRoute, private _wpService: WpService) { }

  ngOnInit() {
    let slug = this._route.snapshot.params['slug'];
    console.log(name);
    this._wpService.getWebProjectBySlug(slug).then(result => {
      this.activeProject = result;
      console.log('activeProject:', this.activeProject);
      this.activeProjectImages = this.activeProject.images;
      console.log(this.activeProjectImages);
      // this.goalsObjectives = this.activeProject.acf.goals_and_objectives;
    });
  }

}
