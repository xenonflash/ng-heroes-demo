import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROS } from '../mock/heros'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero
  heroes: Hero[]
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroes = this.heroService.getHeros()
  }
  onSelect(hero: Hero): void{
    this.selectedHero = hero
  }
  ngOnInit() {
    this.getHeroes()
  }

}
