import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './components/student-list/student-list.component';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {BooksComponent} from './components/books/books.component';

const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'students'}, {path: 'students', component: StudentListComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'student/:id/books', component: BooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
