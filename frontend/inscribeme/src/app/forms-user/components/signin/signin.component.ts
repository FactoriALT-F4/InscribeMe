import { Component } from '@angular/core';
import { UsersService } from "../../service/users/users.service";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email!: string;
  password!: string;
 

  constructor(public userService: UsersService, private router: Router) {}

  
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/");
    });
  }

}
