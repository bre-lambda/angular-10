import { Router } from '@angular/router';
import { Student } from './../../model/students';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { StudentFacadeService } from '../../facade/student-facade';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  students = this.studentFacade.students$;
  selectedItem: Student = null;
  showList = true;
  keyword = new FormControl('');

  constructor(
    private readonly studentFacade: StudentFacadeService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.studentFacade.getAllStudent('');
  }
  toggleView(): void {
    this.showList = !this.showList;
    this.selectedItem = null;
  }
  confirmBox(id: number) {
    Swal.fire({
      title: `Are you sure want to delete ${id}?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.studentFacade.deleteStudent(id);
      }
    });
  }
  addStudent(value: any) {
    this.studentFacade.addStudent(value);
    this.showList = !this.showList;
  }

  updateStudent(value: any) {
    this.studentFacade.updateStudent(this.selectedItem.id, value);
    this.selectedItem = null;
    this.showList = !this.showList;
  }
  filterStudent() {
    let input, filter, table, tr, td, i, txtValue;
    input = this.keyword.value;
    filter = input.toUpperCase();
    table = document.getElementById('studentTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }
  searchStudent() {
    const k = this.keyword.value;
    if (k) {
      this.studentFacade.getAllStudent(k);
    }
  }
  openDetail(item: Student) {
    //this.router.navigate([`students/${item.id}`]);
    this.selectedItem = item;
    this.showList = !this.showList;
  }
}
