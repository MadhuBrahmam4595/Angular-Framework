import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { EmployeeService } from '../employee.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employees: any[] = [];
  showList=true;

  //constructor(private empService: EmployeeService){}

  ngOnInit(): void {
      //this.employees = this.empService.getEmployees();
  }
  toggleList(){
    this.showList = !this.showList;
  }


  employee={
    name: '', position: '', salary: null
  };

  onSubmit(form:NgForm){
    if(form.valid){
      console.log('submitted employee:', this.employee);
      alert('employee added successfully!');
      form.resetForm();
    }
  }

}
