import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  //Project From Data
  public projectName: string;
  public projectDescription: string;
  public technologies: string;
  public projectImages;

  constructor(private _nodeService: NodeService) { }

  ngOnInit() {

  }

  onChange(fileInput: any) {
    console.log(fileInput);
  }

  onSubmit() {
    let newProject = {
      name: this.projectName,
      description: this.projectDescription,
      technologies: this.technologies,
      file: this.projectImages
    }

    console.log(newProject);

    this._nodeService.addProject(newProject).subscribe(error => {
      console.log(error);
    });

}
}
