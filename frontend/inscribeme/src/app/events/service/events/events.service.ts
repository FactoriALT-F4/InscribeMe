import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = 'http://localhost:4000/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEvent(eventId: string): Observable<Events> {
    const url = `${this.apiUrl}/${eventId}`; 
    return this.http.get<Events>(url);
  }

  saveEvent(eventData: Events): Observable<Events> {
    return this.http.post<Events>(`${this.apiUrl}/create`, eventData);
  }

  deleteEvent(eventId: string): Observable<Events> {
    return this.http.delete<Events>(`${this.apiUrl}/delete/${eventId}`);
  }
}

