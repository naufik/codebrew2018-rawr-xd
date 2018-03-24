import { TestBed, inject } from '@angular/core/testing';

import { SearchNewsService } from './search-news.service';

describe('SearchNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchNewsService]
    });
  });

  it('should be created', inject([SearchNewsService], (service: SearchNewsService) => {
    expect(service).toBeTruthy();
  }));
});


{{ filter_expression | filter : expression : comparator : anyPropertyKey}}
