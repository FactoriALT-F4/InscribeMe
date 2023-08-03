import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events/events.service';
import { Events } from '../../events/models/events.model';

@Component({
  selector: 'app-detailscards',
  templateUrl: './detailscards.component.html',
  styleUrls: ['./detailscards.component.scss']
})
export class DetailscardsComponent implements OnInit{

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
