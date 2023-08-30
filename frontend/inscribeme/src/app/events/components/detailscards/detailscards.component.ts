import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../../models/events.model';
import { TranslateService } from '@ngx-translate/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-detailscards',
  templateUrl: './detailscards.component.html',
  styleUrls: ['./detailscards.component.scss']
})
export class DetailscardsComponent implements OnInit {

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
