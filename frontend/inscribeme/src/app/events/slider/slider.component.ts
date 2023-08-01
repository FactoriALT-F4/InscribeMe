import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events/events.service';
import { Events } from 'src/app/events/models/events.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  Events: Events[] = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      (data: Events[]) => {
        this.Events = data;
      }
    );
  }
}