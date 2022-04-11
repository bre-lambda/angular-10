import { Student } from './../../model/students';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit, OnChanges {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
  @Output() addStudentEvent = new EventEmitter<any>();
  @Output() updateStudentEvent = new EventEmitter<any>();
  @Input() selectedStudent?: Student = null;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: [this.selectedStudent?.firstName, Validators.required],
      phoneNumber: [this.selectedStudent?.phoneNumber],
      gender: [this.selectedStudent?.gender],
      email: [
        this.selectedStudent?.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],

      lastName: [this.selectedStudent?.lastName, Validators.required],
      address: this.fb.group({
        country: [this.selectedStudent?.address?.country],
        city: [this.selectedStudent?.address?.city],
        zipCode: [this.selectedStudent?.address?.zipCode],
      }),
    });
  }

  addNewStudent() {
    this.addStudentEvent.emit(this.registrationForm.value);
  }

  updateStudent() {
    this.updateStudentEvent.emit(this.registrationForm.value);
  }
  get isEmpty(): boolean {
    return this.selectedStudent === null ? true : false;
  }
}
