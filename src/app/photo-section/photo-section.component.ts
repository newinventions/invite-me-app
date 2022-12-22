import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-photo-section',
  templateUrl: './photo-section.component.html',
  styleUrls: ['./photo-section.component.css']
})
export class PhotoSectionComponent implements OnInit {

  psTitle:string = "Mis fotos";

  slideStore: any[] = new Array(9).fill({id: "-1", src: '', title: '', subtitle: ''});

  owlOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    dragEndSpeed: 650,
    pullDrag: false,
    dots: true,
    dotsSpeed: 1000,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    center: true,
    autoHeight: true,
    autoWidth: true,
  };
  activeSlides!: SlidesOutputData;

  constructor() { }

  ngOnInit(): void {
    this.slideStore = [
      { id: "1", img: '../../assets/photo-section/20210901_152325_ret.jpg', },
      { id: "2", img: '../../assets/photo-section/07_20200925_145318_ret.jpg', },
      { id: "3", img: '../../assets/photo-section/20201115_140729_ret.jpg', },
      { id: "4", img: '../../assets/photo-section/20201129_110522_ret.jpg', },
      { id: "5", img: '../../assets/photo-section/20201230_201724_ret.jpg', },
      { id: "6", img: '../../assets/photo-section/20211129_145930_ret.jpg', },
      { id: "7", img: '../../assets/photo-section/20211226_154827_ret.jpg', },
      { id: "8", img: '../../assets/photo-section/20220421_155752_ret.jpg', }, 
      { id: "9", img: '../../assets/photo-section/20220727_154944_ret.jpg', },
    ];
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;

  }

}
