import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { WelcomeInfoComponent } from '../welcome-info/welcome-info.component';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent implements OnInit {

  constructor(public welcomeDialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialog = this.welcomeDialog.open(WelcomeInfoComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${ result }`)
    })
  }

}
