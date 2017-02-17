import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects;
  constructor(private _nodeService: NodeService) { }

  ngOnInit() {
    this._nodeService.getAllProjects().then(result => {
      console.log(result);
      this.projects = result;
    });
    // console.log(this.projects);
  }

}
