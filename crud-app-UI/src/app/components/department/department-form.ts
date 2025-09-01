import { Component, OnInit, Input } from '@angular/core';
import { DepartmentService } from '../../services/department.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.html',
  styleUrls: ['./department-form.css']
})
export class DepartmentFormComponent implements OnInit {
  @Input() departmentId: number | null = null;

  department = {
    name: '',
    description: ''
  };

  isEdit = false;

  constructor(
    private deptService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.departmentId = +id;
      this.deptService.getAll().subscribe((data: any[]) => {
        const found = data.find(d => d.id === this.departmentId);
        if (found) this.department = { ...found };
      });
    }
  }

  saveDepartment() {
    if (this.isEdit && this.departmentId) {
      this.deptService.update(this.departmentId, this.department).subscribe(() => {
        alert('Department updated successfully');
        this.router.navigate(['/departments']);
      });
    } else {
      this.deptService.create(this.department).subscribe(() => {
        alert('Department created successfully');
        this.router.navigate(['/departments']);
      });
    }
  }
}
