import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Student} from '../../interfaces/student';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.css']
})
export class ModifyModalComponent implements OnInit {
  @Input()
  student: Student;
  studentForm: FormGroup;
  s: Student[];

  constructor(public activeModal: NgbActiveModal, private studentService: StudentService) {
    this.s = [];
    // this.name = this.student.name;
    // this.studentForm = this.createStudentForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.studentForm = new FormGroup({
      name: new FormControl(this.student.name, Validators.required),
      email: new FormControl(this.student.email, [Validators.required, Validators.email]),
      age: new FormControl(this.student.age, [Validators.required, Validators.min(18), Validators.max(120)]),
      gender: new FormControl(this.student.gender, this.studentService.genderValidator),
    });
  }

  // private createStudentForm(): FormGroup {
  //   return this.formBuilder.group({
  //     name: [this.student.name, Validators.required],
  //     email: [this.student.email, Validators.email],
  //     age: [this.student.age, [Validators.min(18), Validators.max(120)]],
  //     gender: this.student.gender,
  //   });
  // }

  // tslint:disable-next-line:typedef
  onSubmit(): boolean {
    if (this.studentForm.valid) {
      this.studentService.modifyStudent(this.student.id, this.studentForm.value).subscribe(resp => {
        this.studentService.refreshStudents(resp.students);
        this.activeModal.close();
      });
    } else {
      return false;
    }
  }


}


// createMyForm(): FormGroup {
//   return this.formBuilder.group({
//     userName: this.formBuilder.group({
//       firstName: 'Mekk',
//       middleName: null,
//       lastName: ['Elek',
//         Validators.required]
//     })
