import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/students';
import { endpoint } from './endpoints';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // students: Student[] = [
  //   // {
  //   //   id: 11,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 12,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 13,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 14,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 15,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 16,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 17,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 18,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 19,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  //   // {
  //   //   id: 20,
  //   //   firstName: 'Student1',
  //   //   lastName: 'lastName1',
  //   //   email: 'student1@gmail.com',
  //   //   phoneNumber: '0967544321',
  //   //   address: {
  //   //     city: 'Addis Ababa',
  //   //     country: 'Ethiopia',
  //   //     zipCode: '1000',
  //   //   },
  //   // },
  // ];
  constructor(private http: HttpClient) {}
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(endpoint.create, student);
  }
  updateStudent(studentId: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${endpoint.update}/${studentId}`, student);
  }
  getStudents(keyword?: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${endpoint.list}?keyword=${keyword}`);
  }
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${endpoint.get}/${id}`);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${endpoint.delete}/${id}`);
  }
}
