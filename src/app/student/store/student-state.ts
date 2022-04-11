import Swal from 'sweetalert2';

import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { Student } from '../model/students';
import { StudentService } from './../services/student.service';
import {
  GetAllStudent,
  AddStudent,
  DeleteStudent,
  StudentDetail,
  UpdateStudent,
} from './student-action';

export interface StudentStateModel {
  students: Student[];
  selectedStudent: Student;

  isLoading: boolean;
}
@State<StudentStateModel>({
  name: 'StudentStStateModel',
  defaults: {
    students: [],
    selectedStudent: undefined,

    isLoading: false,
  },
})
@Injectable()
export class StudentState {
  @Selector() public static students(state: StudentStateModel): Student[] {
    return state.students;
  }
  @Selector() public static selectedStudent(state: StudentStateModel): Student {
    return state.selectedStudent;
  }

  @Selector() public static isLoading(state: StudentStateModel): boolean {
    return state.isLoading;
  }
  constructor(private readonly studentService: StudentService) {}

  @Action(AddStudent) addStudent(
    { patchState, getState }: StateContext<StudentStateModel>,
    { payload }: AddStudent
  ): any {
    patchState({
      isLoading: true,
    });

    return this.studentService.createStudent(payload).pipe(
      tap((result: any) => {
        patchState({
          isLoading: false,
          selectedStudent: result,
          students: [...getState().students, result],
        });
        Swal.fire('Student created successfully!');
      }),
      catchError((error) =>
        of(
          patchState({
            isLoading: false,
          })
        )
      )
    );
  }
  @Action(UpdateStudent) updateStudent(
    { patchState, getState }: StateContext<StudentStateModel>,
    { studentId, payload }: UpdateStudent
  ): any {
    patchState({
      isLoading: true,
    });

    return this.studentService.updateStudent(studentId, payload).pipe(
      tap((result: any) => {
        patchState({
          isLoading: false,
          selectedStudent: result,
          students: [
            ...getState().students.filter((i) => i.id !== studentId),
            result,
          ],
        });
        Swal.fire('Student updated successfully!');
      }),
      catchError((error) =>
        of(
          patchState({
            isLoading: false,
          })
        )
      )
    );
  }
  @Action(GetAllStudent) listStudents(
    { patchState }: StateContext<StudentStateModel>,
    { key }: GetAllStudent
  ): any {
    patchState({
      isLoading: true,
    });

    return this.studentService.getStudents(key).pipe(
      tap((result: any) => {
        patchState({
          isLoading: false,
          students: result,
        });
      }),
      catchError((error) =>
        of(
          patchState({
            isLoading: false,
          })
        )
      )
    );
  }

  @Action(DeleteStudent) deleteStudent(
    { patchState, getState }: StateContext<StudentStateModel>,
    { studentId }: DeleteStudent
  ): any {
    patchState({
      isLoading: true,
    });

    return this.studentService.deleteStudent(studentId).pipe(
      tap((result: any) => {
        patchState({
          isLoading: false,
          students: getState().students.filter((i) => i.id !== studentId),
        });
        Swal.fire('Student deleted successfully!');
      }),
      catchError((error) =>
        of(
          patchState({
            isLoading: false,
          })
        )
      )
    );
  }

  @Action(StudentDetail) getStudentById(
    { patchState }: StateContext<StudentStateModel>,
    { studentId }: StudentDetail
  ): Observable<Student | StudentStateModel> {
    patchState({
      isLoading: true,
    });

    return this.studentService.getStudent(studentId).pipe(
      tap((item: Student) => {
        patchState({
          isLoading: false,
          selectedStudent: item,
        });
      }),
      catchError((error) =>
        of(
          patchState({
            isLoading: false,
          })
        )
      )
    );
  }
}
