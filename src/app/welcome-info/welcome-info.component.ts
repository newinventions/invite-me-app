import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-info',
  templateUrl: './welcome-info.component.html',
  styleUrls: ['./welcome-info.component.css']
})
export class WelcomeInfoComponent implements OnInit {

  wiSalutation:string = "Bienvenido a la invitación de Yeshua";
  wiEnterButton:string = "INGRESAR";

  constructor() { }

  ngOnInit(): void {
  }

}
