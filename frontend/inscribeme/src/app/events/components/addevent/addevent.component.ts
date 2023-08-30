import { Component } from '@angular/core';
import { EventsService } from '../../service/events/events.service';
import { Events} from '../../models/events.model'

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent {
  event: Events = {
    idevents: 0,
    name: '',
    description: '',
    imgUrl: '',
    startingDate: '',
    enDate: '',
    creationDate: '',
    insPeople: 0,
    maxPeople: 0
  };

  constructor(private eventsService: EventsService) {}

  eventsave() {
    const currentDateTime = new Date().toISOString().slice(0, 16);
    this.event.creationDate = currentDateTime;
    this.eventsService.saveEvent(this.event).subscribe(
      savedEvent => {
        this.event = savedEvent;

        this.event = {
          idevents: 0,
          name: '',
          description: '',
          imgUrl: '',
          startingDate: '',
          enDate: '',
          creationDate: '',
          insPeople: 0,
          maxPeople: 0
        };
      },
      error => {
        console.error('Error saving event:', error);
      }
    );
  }
}
