import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/service/events/events.service';
import { Events } from '../../events/models/events.model';

@Component({
  selector: 'app-detailscards',
  templateUrl: './detailscards.component.html',
  styleUrls: ['./detailscards.component.scss']
})
export class DetailscardsComponent implements OnInit{

  event: Events | undefined;
  eventsData: Events[] = [];

  constructor(private eventsService: EventsService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const eventId = params['id'];
      if (eventId) {
        this.fetchEventData(eventId);
      }
    });
  }

  fetchEventData(eventId: string) {
    this.eventsService.getEvent(eventId).subscribe(
      (data: Events) => {
        this.event = data;
      },
      (error) => {
        console.log('Error fetching event data: ', error);
      }
    );
  }

}
