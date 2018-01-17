import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('newSrvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('newBlptCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
  }

}
