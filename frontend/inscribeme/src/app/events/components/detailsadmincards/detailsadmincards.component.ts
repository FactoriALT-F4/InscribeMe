import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../../models/events.model';

@Component({
  selector: 'app-detailsadmincards',
  templateUrl: './detailsadmincards.component.html',
  styleUrls: ['./detailsadmincards.component.scss']
})
export class DetailsadmincardsComponent implements OnInit{

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
