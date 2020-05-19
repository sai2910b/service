import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  pageTitle:string="Services in Angular";
  users:any;

  constructor(private userService:UsersService) { }

  ngOnInit(){
    this.userService.getAllUsers().subscribe((data)=>{

      this.users=data;
   });
 }

}
