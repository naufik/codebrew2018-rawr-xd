import { TestBed, inject } from '@angular/core/testing';

import { JSONService } from './textdb.service';

describe('TextdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextdbService]
    });
  });

  it('should be created', inject([TextdbService], (service: TextdbService) => {
    expect(service).toBeTruthy();
  }));
});
