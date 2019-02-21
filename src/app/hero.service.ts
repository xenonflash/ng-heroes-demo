import { Injectable } from '@angular/core';
import { HEROS } from './mock/heros'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeros(): Hero[] {
    return HEROS
  }
}
