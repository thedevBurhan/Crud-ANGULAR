import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.services';
import { DepartmentService } from '../../services/department.services';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeId!: number;
  employee = { name: '', email: '', department: '' };
  departments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private deptService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    // Load employee
    this.employeeService.getById(this.employeeId).subscribe((data: any) => {
      this.employee = data;
    });

    // Load departments for dropdown
    this.deptService.getAll().subscribe((res: any[]) => {
      this.departments = res;
    });
  }

  onSubmit() {
    this.employeeService.update(this.employeeId, this.employee).subscribe(() => {
      alert('Employee updated successfully!');
      this.router.navigate(['/employees']);
    });
  }
}

