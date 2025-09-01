import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.services';
import { DepartmentService } from '../../services/department.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeId: number | null = null;
  isEdit = false;

  employee = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    departmentId: null
  };

  departments: any[] = [];

constructor(
  private empService: EmployeeService,   // ✅ must be class, not type
  private deptService: DepartmentService,
  private route: ActivatedRoute,
  private router: Router
) {}
  ngOnInit(): void {
    // load departments for dropdown
    this.deptService.getAll().subscribe((res: any[]) => {
      this.departments = res;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.employeeId = +id;

      // fetch all employees or single employee (your API can be adjusted to get by ID)
      this.empService.getAll().subscribe((data: any[]) => {
        const found = data.find(e => e.id === this.employeeId);
        if (found) this.employee = { 
          ...found, 
          departmentId: found.department?.id || null 
        };
      });
    }
  }

  saveEmployee() {
    if (this.isEdit && this.employeeId) {
      this.empService.update(this.employeeId, this.employee).subscribe(() => {
        alert('Employee updated successfully');
        this.router.navigate(['/employees']);
      });
    } else {
      this.empService.create(this.employee).subscribe(() => {
        alert('Employee created successfully');
        this.router.navigate(['/employees']);
      });
    }
  }
}
