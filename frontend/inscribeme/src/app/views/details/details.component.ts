import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events/events.service';
import { Events } from '../../events/models/events.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  eventsData: Events[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.fetchEventsData();
  }

  fetchEventsData() {
    this.eventsService.getEvents().subscribe(
      (data: Events[]) => {
        this.eventsData = data;
      },
      (error) => {
        console.log('Error fetching events data: ', error);
      }
    );
  }
}
