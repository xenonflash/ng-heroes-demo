import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  constructor(private heroService: HeroService) {}
  getHeroes() {
    this.heroService.getHeros().subscribe(res => {
      this.heroes = res.data
    })
  }
  ngOnInit() {
    this.getHeroes()
  }

}
