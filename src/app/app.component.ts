import { Component } from '@angular/core';
import { HerosComponent } from '../app/view/heros/heros.component'
import { MessagesComponent } from '../app/component/messages/messages.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'it-code';
}
