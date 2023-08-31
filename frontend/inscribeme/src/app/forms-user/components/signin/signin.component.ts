// import { Component } from '@angular/core';
// import { UsersService } from '../../service/users/users.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Users } from '../../models/users.model';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.scss'],
// })
// export class SigninComponent {
//   formlogin!: FormGroup;
//   submitted = false;
//   loading = false;
  
//   constructor(private usersService: UsersService, private formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.formlogin = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(4)]]
//     });
//   }

//   login() {
//     if (this.formlogin.invalid) {
//       return; // No enviar la solicitud si el formulario es inválido
//     }

//     const username = this.formlogin.value.username;
//     const password = this.formlogin.value.password;

//     const user: Users = { mail: username, password: password };

//     this.usersService.loginUser(user).subscribe((data) => {
//       // Falta enviar a la ruta correspondiente
//       console.log(data);
//     });
//   }
// }

import { Component } from '@angular/core';
import { UsersService } from '../../service/users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../models/users.model';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  formlogin!: FormGroup;
  submitted = false;
  loading = false;
  errorMessage: string | null = null; // Variable para mostrar mensajes de error
  
  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    this.errorMessage = null; // Restablecer el mensaje de error
  
    if (this.formlogin.invalid) {
      return; // No enviar la solicitud si el formulario es inválido
    }
  
    const username = this.formlogin.value.username;
    const password = this.formlogin.value.password;
  
    // Generar el encabezado de autorización
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    const headers = new HttpHeaders({ 'Authorization': authHeader });
  
    // Enviar la solicitud de inicio de sesión con el encabezado de autorización
    this.usersService.loginUser(username, password, headers).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // Manejo de errores
        console.error('Login error:', error);
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas. Por favor, verifica tus datos.';
        } else {
          this.errorMessage = 'Hubo un error en el inicio de sesión. Por favor, intenta de nuevo más tarde.';
        }
      }
    );
  }
}


