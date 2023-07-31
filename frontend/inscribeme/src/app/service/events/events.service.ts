import { Injectable } from '@angular/core';
import { Events } from 'src/app/events/models/events.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getSliderData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
