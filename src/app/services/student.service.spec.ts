import {TestBed} from '@angular/core/testing';

import {StudentService} from './student.service';
import {HttpClient} from '@angular/common/http';
import {StudentResponse} from '../interfaces/student-response';
import {Observable, of} from 'rxjs';


describe('StudentService', () => {
  let service: StudentService;
  let spy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    // service = TestBed.inject(StudentService);
    service = new StudentService({} as HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it ('should get a student from server', function(){
    const studentResponse: StudentResponse = {
      success: true,
      students: [student]
    };
    const responsObs: Observable<StudentResponse> = of(studentResponse);
    spy.get.and.returnValue(responsObs);
    service.getStudents(stu)
  });
});
