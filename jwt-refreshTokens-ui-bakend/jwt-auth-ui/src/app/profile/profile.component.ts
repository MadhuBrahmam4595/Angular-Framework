import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  profileInfo: string = '';

  constructor(
    private userService: UserService
  ){}

  ngOnInit(): void {
      this.getProfile();
  }

  getProfile(): void{
    this.userService.profile().subscribe({
      next: (response)=>{
        console.log(response);
        this.profileInfo = response.message;
      },
      error: (err)=>{
        console.log(err.error);
      }
    });
  }

}
