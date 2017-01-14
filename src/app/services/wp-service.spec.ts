/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WpServiceService } from './wp-service.service';

describe('WpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WpServiceService]
    });
  });

  it('should ...', inject([WpServiceService], (service: WpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
