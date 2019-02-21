import { Injectable } from '@angular/core';
import { HEROS } from './mock/heros'
import { Hero } from './hero'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeros(): Observable<Hero[]> {
    return of(HEROS)
  }
}
