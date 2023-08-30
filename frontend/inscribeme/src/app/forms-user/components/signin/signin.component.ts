// import { Component } from '@angular/core';
// import { UsersService } from '../../service/users/users.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.scss']
// })
// export class SigninComponent {
//   email: string = ''; 
//   password: string = '';

//   constructor(public userService: UsersService, private router: Router) {}

//   login() {
//     const user = { email: this.email, password: this.password };
//     this.userService.login(user).subscribe((data) => {
//       this.userService.setToken(data.token);
//      
//     });
//   }
// }

import { Component } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  credentials = {
    mail: '',
    password: ''
  };

  constructor(private userService: UsersService, private router: Router) {}
  
  users: any[] = [];
  
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('Usuarios:', this.users);
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }



  login() {
    this.userService.authenticate(this.credentials, () => {
      this.router.navigateByUrl("/");
      console.log('Usuario autenticado:', this.userService.authenticated);
    });
  }
}

