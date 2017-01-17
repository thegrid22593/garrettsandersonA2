import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WpService {

  constructor(private _http:Http) { }


  getAllWebProjects() {
    return this._http.get('http://gsandersongraphics.com/wp-json/wp/v2/web-projects')
    .map((response: Response) => response.json() )
    .toPromise()
    .catch(this.handleError)
  }

  getAllTestimonails() {
    return this._http.get('http://gsandersongraphics.com/wp-json/wp/v2/testimonials')
    .map((response: Response) => response.json() )
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
