import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input()
  student: Student;
  saveID: number;

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {
    this.saveID = +this.route.snapshot.paramMap.get('id');
    if (isNaN(this.saveID)) {
      this.router.navigate(['/students']);
    }
  }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(): void {
    this.studentService.currentStudent(this.saveID).subscribe(s => this.student = s);

  }
}

