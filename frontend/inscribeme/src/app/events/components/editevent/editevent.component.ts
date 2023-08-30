import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.scss']
})
export class EditeventComponent implements OnInit {
  event: any = {};
  
  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {}

  ngOnInit() {}

  loadEventDetails(event: any) {
    console.log(event)
    this.event = event;
  }

  eventsave() {
    if (this.event.id) {
      this.eventsService.saveEvent(this.event).subscribe(
        savedEvent => {
          console.log('Evento actualizado:', savedEvent);
          this.router.navigate(['/homeadmin']);
        },
        error => {
          console.error('Error al actualizar evento:', error);
        }
      );
    }
  }
}