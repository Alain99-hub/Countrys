import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-pages',

  templateUrl: './aboutPages.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class AboutPagesComponent { }
