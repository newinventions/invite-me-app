import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.css']
})
export class FamilyInfoComponent implements OnInit {

  myFamilyTitle = "¡Mi Familia!";
  momFirstName = "Blanca Ruth";
  momField = "Mi mamá";
  dadFirstName = "Raymundo Jacobo";
  dadField = "Mi papá";
  petsName = "Toby & Daisy";
  petsField = "Mis mascotas";

  constructor() { }

  ngOnInit(): void {
  }

}
