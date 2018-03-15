import { TestBed, inject } from '@angular/core/testing';

import { todoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [todoDataService]
    });
  });

  it('should be created', inject([todoDataService], (service: todoDataService) => {
    expect(service).toBeTruthy();
  }));
});
