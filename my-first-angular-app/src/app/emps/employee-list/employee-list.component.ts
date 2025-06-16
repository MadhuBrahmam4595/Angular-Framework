import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model'; 
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private service:EmployeeService, private router: Router){}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.service.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.service.delete(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }

  addEmployee(): void {
    this.router.navigate(['emps/form']);
  }

  editEmployee(emp: Employee): void {
    this.router.navigate(['emps/form'], { state: { data: emp } });
  }

}
