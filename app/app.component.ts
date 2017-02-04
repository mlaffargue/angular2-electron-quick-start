import { Component } from '@angular/core';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'my-app',
  template: `<h1>Angular ok : {{name}}</h1> <input type='text' [(ngModel)]="name"/>
  <h1>Calling nodejs:</h1> {{electronSays}}
  `,
})
export class AppComponent  { 
  name:string = "I'm OK"; 
  electronSays:string = '';

  ngOnInit() {
    this.electronSays = ipcRenderer.sendSync('say-hello-nodejs')
  }
}
