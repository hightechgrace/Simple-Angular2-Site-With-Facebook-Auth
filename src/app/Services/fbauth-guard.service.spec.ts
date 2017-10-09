/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FBAuthGuardService } from './fbauth-guard.service';

describe('FBAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FBAuthGuardService]
    });
  });

  it('should ...', inject([FBAuthGuardService], (service: FBAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
