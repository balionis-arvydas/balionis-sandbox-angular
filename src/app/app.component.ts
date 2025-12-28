import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMessageComponent } from './components/list-message/list-message.component';
import { AddMessageComponent } from './components/add-message/add-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListMessageComponent, AddMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  readonly title: string;

  readonly messages: string[];

  constructor() {
    this.title = 'balionis-sandbox-angular';
    console.log('title=' + this.title);
    this.messages = [];
  }

  public onAdd(message: string) {
    console.log('onAdd: message=' + message);
    this.messages.push(message);
  }

  public onRemove(index: number) {
    console.log('onRemove: index=' + index);
    if (index < this.messages.length) {
      this.messages.splice(+index, 1);
    }
  }
}
