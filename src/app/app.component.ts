import { Component } from '@angular/core';

import {  ReCaptchaV3Service } from 'ng-recaptcha';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recaptchatres';

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
  }
 
  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction').subscribe(console.log);
  }
}
