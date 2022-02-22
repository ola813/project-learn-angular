import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: User;
 
  constructor() {
    this.user ={
      firstname:'ola',
      Lastname:'salloh',
      Age:23,
      Address:{
        Street:'JA',
        City:'Damas',
      }
    }
   }
 

  ngOnInit(){
    
  
  }

  }
