import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../interfaces/student';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {
  students2: Student[];
  refreshSubscription: Subscription;
  isLoading: boolean;
  search: string;

  constructor(private studentService: StudentService) {
    this.students2 = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(s => {
      this.students2 = s;
      this.isLoading = false;
    });
    this.refreshSubscription = this.studentService.refreshObservable.subscribe(students => this.students2 = students);
  }

  delete(s: Student): void {
    this.studentService.deleteStudent(s).subscribe(resp => this.students2 = resp.students);
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }


}
