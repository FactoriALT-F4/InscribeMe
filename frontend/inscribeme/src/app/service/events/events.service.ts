import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../../events/models/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }
}

