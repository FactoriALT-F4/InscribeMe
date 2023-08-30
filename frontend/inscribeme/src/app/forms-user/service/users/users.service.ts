import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

interface ServerResponse {
  name?: string; 
  
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  authenticated = false;

  constructor(private http: HttpClient, private cookies: CookieService) { }


  

  authenticate(credentials: { mail: string; password: string; }, callback: () => any) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.mail + ':' + credentials.password)
    } : {});

    this.http.get<ServerResponse>('manolo', { headers }).subscribe(response => {
      if (response.name) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:4000/users');
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
}
