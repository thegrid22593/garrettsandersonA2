import { Directive, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';

@Directive({ selector: '[fixedTop]' })

export class WorkDirective {
    constructor(el: ElementRef) {
      this.checkScroll(el);
    }

    checkScroll(el) {
      console.log(el);

      var project = el
    }
}
