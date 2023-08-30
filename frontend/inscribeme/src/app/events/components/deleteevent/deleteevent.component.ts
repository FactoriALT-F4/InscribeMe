import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.scss']
})
export class DeleteeventComponent {
  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {}

  onDeleteButtonClick() {
    const eventIdToDelete = 'eventId';

    this.eventsService.deleteEvent(eventIdToDelete).subscribe(
      response => {
        window.alert('Evento eliminado correctamente');
        this.router.navigate(['/detailsadmin']);
      },
      error => {
        window.alert('Error al eliminar el evento. Por favor, intenta nuevamente.');
      }
    );
  }
}

