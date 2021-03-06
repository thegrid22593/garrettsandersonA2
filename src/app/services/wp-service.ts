import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class WpService {

  constructor(private _http:Http) { }


  getAllWebProjects() {
    return this._http.get('/assets/fixtures/projects.json')
    .map((response: Response) => response.json().projects )
    .toPromise()
    .catch(this.handleError);
  }

  getWebProjectBySlug(slug: string) {
    return this._http.get('/assets/fixtures/projects.json')
    .map((response: Response) => _.find(response.json().projects, {'slug': slug}))
    .toPromise()
    .catch(this.handleError);
  }

  // getAllTestimonails() {
  //   return this._http.get('./fixtures/testimonials.json')
  //   .map((response: Response) => response.json().testimonials)
  //   .toPromise()
  //   .catch(this.handleError);
  // }

  sendEmail(emailInfo) {
    return this._http.post('/api/sendEmail', emailInfo)
    .map((response: Response) => response.json() )
    .catch(this.handleError);
  }

  // getjson(){
  //   return this._http.get('/fixtures/test.json')
  //   .map((response: Response) => response.json())
  //   .toPromise()
  //   .catch(this.handleError);
  // }

  addUser(item) {
    return this._http.post('/fixtures/test.json', item)
    .map((response: Response) => response.json())
    .toPromise()
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
