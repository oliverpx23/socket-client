import { Component } from '@angular/core';
import { WebSocketsService } from 'src/app/services/web-sockets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  constructor(public wsService: WebSocketsService) { }



}
