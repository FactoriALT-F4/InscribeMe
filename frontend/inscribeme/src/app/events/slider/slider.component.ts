import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events/events.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderData: any[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.eventsService.getSliderData().subscribe(
      (data: any) => {
        this.sliderData = data;
      }
    );
  }
}
