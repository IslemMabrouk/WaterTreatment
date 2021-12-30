import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mini-card1',
  templateUrl: './mini-card1.component.html',
  styleUrls: ['./mini-card1.component.css']
})
export class MiniCard1Component implements OnInit {
  users:any;
  s:number=0;
  constructor(private userService : UserService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (data)=>{

      this.users =data.users;
      console.log(this.users);
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].role=="client") {
          this.s = this.s + 1;
        }
        
      }
      console.log(this.s);
      
  
  
  });

       
        
  }
  }


