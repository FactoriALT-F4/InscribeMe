import { Component } from '@angular/core';
import { LocalizationService } from '../services/localization-service.service';

@Component({
  selector: 'app-modalprofile',
  templateUrl: './modalprofile.component.html',
  styleUrls: ['./modalprofile.component.scss']
})
export class ModalprofileComponent {

  constructor(private localizationService: LocalizationService) { }

  changeLanguage(lang: string) {
    this.localizationService.changeLanguage(lang);
  }
}
