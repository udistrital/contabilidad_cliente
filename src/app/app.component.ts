/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('far', { iconClassPrefix: 'fa', packClass: 'far' });
    this.iconLibraries.registerFontPack('fas', { iconClassPrefix: 'fa', packClass: 'fas' });
  }

  ngOnInit(): void {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('es');
    this.translateService.use(this.translateService.getBrowserLang());
  }
}
