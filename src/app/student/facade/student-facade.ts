import {
  DeleteStudent,
  StudentDetail,
  UpdateStudent,
} from './../store/student-action';
import { Student } from './../model/students';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { StudentState } from '../store/student-state';
import { AddStudent, GetAllStudent } from '../store/student-action';

@Injectable({
  providedIn: 'root',
})
export class StudentFacadeService {
  students$ = this.store.select(StudentState.students);
  selectedStudent = this.store.select(StudentState.selectedStudent);
  isLoading = this.store.select(StudentState.isLoading);

  constructor(private readonly store: Store) {}

  getAllStudent(searchKey: string): any {
    this.store.dispatch(new GetAllStudent(searchKey));
  }

  addStudent(student: Student): any {
    this.store.dispatch(new AddStudent(student));
  }
  deleteStudent(studentId: number): any {
    this.store.dispatch(new DeleteStudent(studentId));
  }
  getStudent(studentId: number): any {
    this.store.dispatch(new StudentDetail(studentId));
  }
  updateStudent(studentId: number, payload: Student): any {
    this.store.dispatch(new UpdateStudent(studentId, payload));
  }
}
