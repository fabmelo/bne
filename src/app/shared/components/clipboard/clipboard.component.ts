// angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bne-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent {

  @Input() rowValue: Object;

  onCopy(){
    return JSON.stringify(this.rowValue);
  }

}
