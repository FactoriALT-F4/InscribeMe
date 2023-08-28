import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../../models/events.model';

@Component({
  selector: 'app-homeadmincards',
  templateUrl: './homeadmincards.component.html',
  styleUrls: ['./homeadmincards.component.scss']
})
export class HomeadmincardsComponent implements OnInit{

  eventsData: Events[] = [];

  constructor(private router: Router, private eventsService: EventsService) { }

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
