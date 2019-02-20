import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'hero-detail', // 组件名 在父组件中 标签名
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.styl']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero // Input 相当于 props 声明
  constructor() { }

  ngOnInit() {
  }

}
