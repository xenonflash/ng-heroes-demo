import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { Hero } from '../hero'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeros().subscribe(res => {
      this.heroes = res.slice(1, 5)
    })
  }
  ngOnInit() {
    this.getHeroes()
  }
}
