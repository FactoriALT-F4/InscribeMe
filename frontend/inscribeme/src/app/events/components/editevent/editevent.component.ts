import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.scss']
})
export class EditeventComponent implements OnInit {
  eventDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('eventId');
      if (eventId !== null) {
        this.loadEventDetails(eventId);
      }
    });
  }

  loadEventDetails(eventId: string) {
    this.eventsService.getEvent(eventId).subscribe(
      response => {
        this.eventDetails = response;
      },
      error => {
        console.error('Error al cargar detalles del evento:', error);
      }
    );
  }

  onEditClick() {
    this.router.navigate(['/editevent'], { state: { eventDetails: this.eventDetails } });
  }
}
