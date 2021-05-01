import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {

  opts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  @Input() peliculasRecientes: Pelicula[] = [];

  constructor() { }

  ngOnInit() {}

}
