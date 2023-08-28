import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private translateService: TranslateService) { }

  changeLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
