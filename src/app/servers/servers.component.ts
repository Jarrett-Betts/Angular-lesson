import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // Assignment: Practice Databinding
  username = '';
  onUpdateUserName() {
    this.username = '';
  }
}
