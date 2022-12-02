import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ending-info',
  templateUrl: './ending-info.component.html',
  styleUrls: ['./ending-info.component.css']
})
export class EndingInfoComponent implements OnInit {

  babyName = "Yeshua";
  message = "¡Mi familia y yo te esperamos para celebrar!"

  constructor() { }

  ngOnInit(): void {
  }

}
