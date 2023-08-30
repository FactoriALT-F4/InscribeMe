import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:4000/login", user);
  }

  setToken(token: string) { 
    this.cookies.set("token", token); 
  }

  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("http://localhost:4000/users");
  }

  getUserLogged(): Observable<any> { 
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` 
    });

    return this.http.get("http://localhost:4000/users", { headers }); 
  }
}
