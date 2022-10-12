import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HostMapComponent } from '../host-map/host-map.component';
import { MassMapComponent } from '../mass-map/mass-map.component';

@Component({
  selector: 'app-where-when-info',
  templateUrl: './where-when-info.component.html',
  styleUrls: ['./where-when-info.component.css']
})
export class WhereWhenInfoComponent implements OnInit {
  churchTitle:string = "Ceremonia Religiosa";
  churchName:string = "Monasterio de la Purísima Concepción";
  churchWhen:string = "1º de Abril de 2023, 10 a.m.";
  churchWhere:string = "Blvd. Mártires del 2 de Octubre #4313, Col. San Baltazar Campeche, C.P. 72550, Puebla, Pue.";
  hostTitle:string = "Recepción";
  hostingName:string = "Salón 'Geli', Eventos Sociales";
  hostWhere:string = "Blvd. Los Pilares #2212, Col. Los Pilares, C.P. 72560, Puebla, Pue.";
  hostWhen:string = "1º de Abril de 2023, 12 p.m.";
  when:string = "Cuándo:";
  where:string = "Dirección:";
  mapButton:string = "Ver mapa";
  calButton:string = "Agendar en el calendario";

  constructor(public massDialog: MatDialog, public hostDialog: MatDialog) { }
  ngOnInit(): void {
  }

  openMassDialog() {
    const dialog = this.massDialog.open(MassMapComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialog.afterClosed().subscribe( res => {
      console.log(`Dialog result: ${ res }`)
    })
  }

  openHostDialog() {
    const dialog = this.hostDialog.open(HostMapComponent, {
      height: 'auto',
      width: 'auto'
    });
    dialog.afterClosed().subscribe( res => {
      console.log(`Dialog result: ${ res }`)
    })
  }
}
