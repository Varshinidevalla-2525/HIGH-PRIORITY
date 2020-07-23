import { Component } from '@angular/core';
import {WindowState} from '@progress/kendo-angular-dialog';

@Component({
    selector: 'My-App',
    template: `
      <p><button kendoButton *ngIf="!opened" (click)="openClose(true)">Open</button></p>
      <p>output <b>{{windowState}}</b></p>
      <kendo-window [height]="height" [top]="100" [left]="50" title="Change " [(state)]="windowState" *ngIf="opened" (close)="openClose(false)">
        <p style="text-align: center;">minimize and  maximize and closed</p>
      </kendo-window>
    `
})
export class AppComponent {
     public windowState: WindowState = 'default';
    public opened: boolean = true;
    public height = 200;

  
    public openClose(isOpened: boolean) {
      this.opened = isOpened;
    }
    public onstatechange(e) {
      if(e === 'minimized'){
        this.height = 88;
       } else if (e === 'default'){
         this.height = 200;
       }
    }
}