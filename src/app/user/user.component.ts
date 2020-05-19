import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{UsersService} from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:any;
  constructor(private route:ActivatedRoute,private userService:UsersService) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.userService.getUsers(id).subscribe((u)=>{
      console.log(u);
      this.user=u;
    })

    
  }

}
