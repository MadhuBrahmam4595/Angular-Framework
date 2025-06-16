import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'form', component: EmployeeFormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeFormComponent,
    EmployeeListComponent
  ]
})
export class EmpsModule { }
