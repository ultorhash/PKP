import { Component, OnInit, ViewChild } from '@angular/core'; 
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };  

  constructor() {}

  ngOnInit(): void {   
    
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

}
