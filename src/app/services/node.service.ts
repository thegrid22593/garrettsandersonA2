import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class NodeService {

  constructor(private _http:Http) { }

  addTestimonial(emailInfo) {
    return this._http.post('/api/testimonial', emailInfo)
    .map((response: Response) => response.json() )
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    if(error.status == 404) {
      alert('Please change all references to /confidential/fixture/work.json to /fixture/work.json in the work.service.ts file');
    }
    return Observable.throw(error.json().error || 'Server error');
  }
}
