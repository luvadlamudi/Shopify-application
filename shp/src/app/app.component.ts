import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';
import { Posts } from './interfaces/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  foundPosts: Posts[] = [];
  constructor(public com: CommunicationService) {}
  test() {
   this.com.test().subscribe((value: Posts)=>{
     this.foundPosts.push(value);
   })
  }
}

