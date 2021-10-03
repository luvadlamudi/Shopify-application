import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Posts } from './interfaces/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentRoute: string = "LandingPage";

  constructor() {}

  switchRoute(newRoute: string){
    console.log(`new route is ${newRoute}`)
    this.currentRoute = newRoute;
  }

}

