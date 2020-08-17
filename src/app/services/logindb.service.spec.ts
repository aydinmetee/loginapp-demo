import { TestBed } from '@angular/core/testing';

import { LogindbService } from './logindb.service';

describe('LogindbService', () => {
  let service: LogindbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
