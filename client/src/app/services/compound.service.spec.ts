import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Compound } from '../types/compound';
import { CompoundService } from './compound.service';

describe('CompoundService', () => {
  let service: CompoundService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:3000/api/compounds';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompoundService]
    });

    service = TestBed.inject(CompoundService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve compound by ID', () => {
    const testCompound: Compound = {
      id: 1,
      compoundName: 'Test Compound',
      compoundImage: 'test-image.jpg',
      compoundDescription: ''
    };

    service.getCompoundById('1').subscribe(compound => {
      expect(compound).toEqual(testCompound);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(testCompound);
  });

  it('should delete a compound', () => {
    const testCompound: Compound = {
      id: 1,
      compoundName: 'Test Compound',
      compoundImage: 'test-image.jpg',
      compoundDescription: ''
    };

    service.deleteCompound(testCompound).subscribe(response => {
      expect(response).toEqual(testCompound);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(testCompound);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
