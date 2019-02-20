import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROS } from '../mock/heros'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  hero: Hero = new Hero(1, 'Windstorm')
  heroes = HEROS
  constructor() {

  }

  ngOnInit() {
  }

}
