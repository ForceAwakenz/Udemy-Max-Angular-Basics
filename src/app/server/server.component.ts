import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: ['.online {color: green;} .offline {color: salmon;}']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string;
  fetching = 'fetching...';
  loading = 'loading...';
  color = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout( () => {
      this.fetching = 'done';
      this.loading = 'data is successfully loaded';
      this.color = 'lightgreen';
    }, 4500);
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
