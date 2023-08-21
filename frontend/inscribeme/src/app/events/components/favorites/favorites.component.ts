import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  @Input() event: any;
  eventsData: any[] = [];

  ngOnInit() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.eventsData.forEach((event) => {
      event.isFavorite = favorites.includes(event.idevents);
    });
  }

  toggleFavorite(event: any) {
    event.isFavorite = !event.isFavorite;
    const favorites = this.eventsData
      .filter((e) => e.isFavorite)
      .map((e) => e.idevents);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  isEventFavorite(event: any): boolean {
    return event.isFavorite;
  }
  
}
