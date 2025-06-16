import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-emp-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './emp-reactive-forms.component.html',
  styleUrl: './emp-reactive-forms.component.css'
})
export class EmpReactiveFormsComponent implements OnInit{

   employeeForm!: FormGroup; 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
      this.employeeForm = this.fb.group({
        name: ['', Validators.required],
        position: ['', Validators.required],
        salary: ['', [Validators.required, Validators.min(10000)]]
      });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Submitted Employee:', this.employeeForm.value);
      alert('Employee Added Successfully!');
      this.employeeForm.reset();
    } else {
      console.log('Form Invalid');
    }
  }
}
