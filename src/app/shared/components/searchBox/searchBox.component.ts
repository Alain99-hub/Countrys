
import {  Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,

})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string='';

  @Output()
  public onValue= new EventEmitter<string>();

  emitValue(value: string):void{
    this.onValue.emit(value)
  }
 }
