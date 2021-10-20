import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  messageClass = 'warning';
  serverName = 'myServer';
  serverCreated = false;
  servers = [
    'Test Server Paris',
    'Test Server Roma'
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.messageClass = 'success';
  }

  // onUpdateServerName(e: Event) {
  //   this.serverName = (<HTMLInputElement>e.target).value;
  // }

}
