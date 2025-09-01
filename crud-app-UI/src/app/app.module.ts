// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';   // 👈 import here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './components/department/department-list';
import { DepartmentFormComponent } from './components/department/department-form';
import { EmployeeListComponent } from './components/employees/employee-list';
import { EmployeeFormComponent } from './components/employees/employee-form';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    // 👈 add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
