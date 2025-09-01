import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getAll().subscribe((res: any[]) => {
      this.employees = res;
    });
  }

  addEmployee() {
    this.router.navigate(['/employees/add']);
  }

  editEmployee(id: number) {
    this.router.navigate(['/employees/edit', id]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.empService.delete(id).subscribe(() => {
        alert('Employee deleted');
        this.loadEmployees();
      });
    }
  }
}
