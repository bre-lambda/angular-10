import { Student } from './../model/students';
export class GetAllStudent {
  static readonly type = '[studentState] GetAllStudent';
  constructor(public key?: string) {}
}
export class AddStudent {
  static readonly type = '[studentState] AddStudent';
  constructor(public payload: Student) {}
}
export class DeleteStudent {
  static readonly type = '[studentState] DeleteStudent';
  constructor(public studentId: number) {}
}
export class StudentDetail {
  static readonly type = '[studentState] StudentDetail';
  constructor(public studentId: number) {}
}
export class UpdateStudent {
  static readonly type = '[studentState] UpdateStudent';
  constructor(public studentId: number, public payload: Student) {}
}
