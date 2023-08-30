import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../../models/events.model';
import { format } from 'date-fns';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detailsadmincards',
  templateUrl: './detailsadmincards.component.html',
  styleUrls: ['./detailsadmincards.component.scss']
})
export class DetailsadmincardsComponent implements OnInit{

  event: Events | undefined;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) { }

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

  formatEventDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = format(date, 'dd-MM-yyyy HH:mm');
    return formattedDate;
  }
}
