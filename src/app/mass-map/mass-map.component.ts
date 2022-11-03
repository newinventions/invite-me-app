import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import keyG from '../../assets/key.json';

@Component({
  selector: 'app-mass-map',
  templateUrl: './mass-map.component.html',
  styleUrls: ['./mass-map.component.css']
})
export class MassMapComponent implements OnInit {
  title:string = "Ceremonia Religiosa";
  church:string = "Monasterio de la Purísima Concepción";
  when:string = "Cuándo:";
  whenData:string = "1º de Abril de 2023, 10 a.m.";
  where:string = "Dirección:";
  whereData:string = "Blvd. Mártires del 2 de Octubre #4313, Col. San Baltazar Campeche, C.P. 72550, Puebla, Pue.";
  closeButton:string = "CERRAR";
  link:string = "<a href=\"https://www.google.com/maps/place/Monasterio+De+La+Purisima+Concepci%C3%B3n+A.+R./@19.0219797,-98.2024491,17z/data=!3m1!4b1!4m5!3m4!1s0x85cfc0bd928e055d:0xef3d4b83c25412ea!8m2!3d19.0219964!4d-98.2001673\" target=\"_blank\" style=\"font-size:10px;\" >Abrir en Google Maps</a>"
  private map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMassMap();
  }

  // Initialize and add the map
  initMassMap(): void {
    // load the map
    let loader = new Loader({
      apiKey: keyG.inviteme_app_g_api_key
    });
    // The location of Monasterio
    const monasterio = { lat: 19.0219964, lng: -98.2001673 };
    loader.load().then(() => {
      console.log('mass map loaded');
      // The map, centered at Monasterio
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 16,
        center: monasterio,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      });
      // The marker, positioned at Monasterio
      const marker = new google.maps.Marker({
        position: monasterio,
        map: this.map,
      });
      // the info window
      const infowindow = new google.maps.InfoWindow({
        content: "<h4 style=\"font-size:12px; line-height: 0.9;\">" + this.church + "</h4><p style=\"font-size:10px; line-height: 0.9;\">" + this.whereData + "</p>" + this.link,
        minWidth: 190,
      });
      google.maps.event.addListener(marker, "click", () => {
        infowindow.open(this.map, marker);
      });
    });
  }
}