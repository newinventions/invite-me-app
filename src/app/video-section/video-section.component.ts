import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit {
  videoTitle = "Ver video";
  @Output()
  videoSender = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendVideo() {
    this.videoSender.emit(this.videoTitle);
  }
}
