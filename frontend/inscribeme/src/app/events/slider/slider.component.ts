import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events/events.service';
import { Events } from 'src/app/events/models/events.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
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