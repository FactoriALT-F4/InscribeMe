import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../service/events/events.service';
import { Events } from '../models/events.model';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.scss']
})
export class HomecardsComponent implements OnInit {

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
