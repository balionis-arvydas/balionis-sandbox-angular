import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-message',
  imports: [],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.less'
})
export class AddMessageComponent {
  @Input()
  message: string;

  @Output()
  add = new EventEmitter();

  constructor() {
    this.message = '';
    console.log('message=' + this.message);
  }

  public onKey(event: any) {
    console.log('onKey: value=' + event.target.value);
    this.message = event.target.value;
  }

  public onClick() {
    console.log('onClick: message=' + this.message);
    this.add.emit(this.message);
    this.message = '';
  }
}
