import { TestBed } from '@angular/core/testing';

import { FileProcesserService } from './file-processer.service';

describe('FileProcessingService', () => {
  let service: FileProcesserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileProcesserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
