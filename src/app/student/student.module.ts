import { StudentService } from './services/student.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { IndexComponent } from './view/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentFacadeService } from './facade/student-facade';
import { DetailComponent } from './view/detail/detail.component';
@NgModule({
  declarations: [AddStudentComponent, IndexComponent, DetailComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [],
  providers: [StudentFacadeService, StudentService],
})
export class StudentModule {}
