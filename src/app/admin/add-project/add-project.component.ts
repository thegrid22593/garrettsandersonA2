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
    this.projectImages = fileInput.target.files;
    console.log('the file', this.projectImages);
  }

  onSubmit() {
    var array = ['1', '2', '3'];
    this._nodeService.addProject(this.projectImages).subscribe(error => {
      console.log(error);
    });
  }
}
