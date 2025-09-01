// department-list.component.ts
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.services';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.html',
  styleUrls: ['./department-list.css']
})
export class DepartmentListComponent implements OnInit {
  departments: any[] = [];

  constructor(private deptService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.deptService.getAll().subscribe((res) => {
      this.departments = res;
    });
  }
}
