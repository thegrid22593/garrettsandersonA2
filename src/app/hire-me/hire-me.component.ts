import { Component, OnInit } from '@angular/core';
import { WpService } from '../services/wp-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent implements OnInit {
  public activeInput: boolean;
  public isHome: boolean = false;

  // form
  name: string;
  email: string;
  website: string;
  phone: string;
  refferal: string;
  budget: number;
  startDate: string;
  projectDescription: string;

  constructor(private _wpService: WpService) { }

  ngOnInit() {
    $('input').on('click', function() {
      let name = $(this).attr('name');
      console.log(name);
      let labels = $('label');
      for(let i = 0; i < labels.length; i++) {
        if(labels[i].getAttribute('for') == name) {
          labels[i].classList.add('active');
        } else {
          labels[i].classList.remove('active');
        }
      }
    });
    $('input').on('keyup', function(e) {
      let keyCode = e.which;
      if(keyCode === 9) {
        let name = $(this).attr('name');
        let labels = $('label');
        for(let i = 0; i < labels.length; i++) {
          if(labels[i].getAttribute('for') == name) {
            labels[i].classList.add('active');
          } else {
            labels[i].classList.remove('active');
          }
        }
      }

    });
  }

  onSubmit() {
    let emailInfo = {
      name: this.name,
      email: this.email,
      website: this.website,
      phone: this.phone,
      refferal: this.refferal,
      budget: this.budget,
      startDate: this.startDate,
      projectDescription: this.projectDescription
    }
    this._wpService.sendEmail(emailInfo).subscribe(error => {
      console.log(error);
    })
  }



}
