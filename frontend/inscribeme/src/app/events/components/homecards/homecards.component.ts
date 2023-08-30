import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../../models/events.model';
import { TranslateService } from '@ngx-translate/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss']
})
export class HomecardsComponent implements OnInit {

  eventsData: Events[] = [];

  constructor(
    private router: Router,
    private eventsService: EventsService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.fetchEventsData();
  }

  fetchEventsData() {
    this.eventsService.getEvents().subscribe(
      (data: Events[]) => {
        this.eventsData = data.map(event => {
          const translatedEvent: Events = { ...event };
          translatedEvent.name = this.translateService.instant(`event${event.idevents}.name`);
          translatedEvent.description = this.translateService.instant(`event${event.idevents}.description`);
          return translatedEvent;
        });
  
        console.log("Feched y traducido:", this.eventsData);
      },
      (error) => {
        console.log('Error fetching: ', error);
      }
    );
  }
  formatEventDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return formattedDate;
  }
}