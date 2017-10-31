import { Component } from '@angular/core';
import { MethodService } from './method.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  response = '';

  constructor(private methodService: MethodService) { }

  sendRequest(method: string) {
    this.methodService.sendRequest(method)
      .then(response => this.response = response);
  }
}
