import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'hero-detail', // 组件名 在父组件中 标签名
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.styl']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero // Input 相当于 props 声明
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  goBack(): void{
    this.location.back()
  }
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHeros().subscribe(res => {
      this.hero = res.data.find(hero => hero.id === id)
    })
  }
}
