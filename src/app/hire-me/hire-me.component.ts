import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent implements OnInit {
  public activeInput: boolean;

  // form
  name: string;
  constructor() { }

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
    console.log('submitted');
  }



}
