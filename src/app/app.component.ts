import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from './services/web-sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-client';

  constructor(
    public wsService: WebSocketsService
  ) {

  }

  ngOnInit() {
    
  }

}
