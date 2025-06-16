import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpReactiveFormsComponent } from './emp-reactive-forms/emp-reactive-forms.component';

export const routes: Routes = [
    //{path: '', component: EmpReactiveFormsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'employees', component: EmployeeComponent},

    {
        path: 'emps',
        loadChildren: ()=> import('./emps/emps.module').then(m=>m.EmpsModule)
    },
    {
        path: '', redirectTo: 'emps', pathMatch: 'full'
    }
];
