import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-message',
  imports: [],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.less'
})
export class ListMessageComponent {
  @Input()
  message: string;

  @Input()
  index: number;

  @Output()
  remove = new EventEmitter();

  constructor() {
    this.message = '';
    this.index = 0;
    console.log('message=' + this.message);
  }

  public onClick() {
    console.log('onClick: message[' + this.index + ']=' + this.message);
    this.remove.emit(this.index);
  }
}
