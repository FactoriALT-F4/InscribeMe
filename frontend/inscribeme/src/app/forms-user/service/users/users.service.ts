import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/assets/config';
import { Users } from '../../models/users.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private actualUser!: Users;
  constructor(private httpClient: HttpClient) {}
  public addUser(user: any) {
    return this.httpClient.post(`${AppConfig.baseUrl}/users`, user);
  }
  public registerUser(user: any): Observable<any> {
    return this.httpClient.post(`${AppConfig.baseUrl}/register`, user);
  }
  public loginUser(user:any): Observable<any> {
    // tienes que generar un token basic y ponerlo en el header
    const headers = new HttpHeaders({ 'Authorization': 'Basic amVzdXM6MTExMQ==' });
    // se ha pasado el metodo de get a post para poder enviar el header
    return this.httpClient.post<Users>(`${AppConfig.baseUrl}/login`, user,{headers});
  }
  setUser(user: any) {
    this.actualUser = user;
  }
  getUser(): Users {
    return this.actualUser;
  }
}

  // login(user: any): Observable<any> {
  //   return this.http.get("http://localhost:4000/login", user);
  // }

  // setToken(token: string) {
  //   this.cookies.set("token", token);
  // }

  // getToken() {
  //   return this.cookies.get("token");
  // }

  // getUser() {
  //   return this.http.get("http://localhost:4000/users");
  // }

  // getUserLogged(): Observable<any> {
  //   const token = this.getToken();
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });

  //   return this.http.get("http://localhost:4000/users", { headers });
  // }

