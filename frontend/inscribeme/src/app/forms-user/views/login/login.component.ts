
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(public userService: UsersService) {}
  ngOnInit() {
  
  }
  
  }