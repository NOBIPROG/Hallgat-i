import {Component, OnInit} from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';
import {Gender} from '../../enum/gender.enum';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  s: Student;
  validName: boolean;
  validAge: boolean;
  validEmail: boolean;
  emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private studentService: StudentService, private router: Router) {
    this.s = {
      name: '',
      email: '',
      age: null,
      gender: Gender.FEMALE,
    };
    this.validAge = true;
    this.validEmail = true;
    this.validName = true;
  }

  ngOnInit(): void {
  }

  saveStudent(): void {

    if (this.s.age >= 18 && this.s.age <= 120) {
      this.validAge = true;
    } else {
      this.validAge = false;
    }
    if (this.s.name !== '') {
      this.validName = true;
    }else {
      this.validName = false;
    }
    if (this.emailRegEx.test(this.s.email)) {
    this.validEmail = true;
    }else {
      this.validEmail = false;
    }
    if (this.validName && this.validAge && this.validEmail) {
      this.studentService.addStudent(this.s).subscribe(() => {
        this.router.navigateByUrl('/students');
      });

    }
    }
  }

