import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  //Project From Data
  public projectName: string;
  public projectDescription: string;

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {

  }

}
