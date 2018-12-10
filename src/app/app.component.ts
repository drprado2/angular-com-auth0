import {Component, OnInit} from '@angular/core';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'teste-auth0';

  constructor() { }
}
