import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { LicenseManager } from 'ag-grid-enterprise/main';
//LicenseManager.setLicenseKey('Preflex_Solutions_Pvt._Ltd._on_behalf_of_Societe_Generale_MultiApp_4Devs25_May_2019_MTU1ODczODgwMDAwMA==5c5c950bb1ce349fe73cb689a1b495ed');

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
