import { Component } from '@angular/core';
import { LocalizationService } from '../services/localization-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private localizationService: LocalizationService) { }

  changeLanguage(lang: string) {
    this.localizationService.changeLanguage(lang);
  }
}