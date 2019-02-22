import { Injectable } from '@angular/core';
import { HEROS } from './mock/heros'
import { Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import Axios from 'axios'

export interface HeroDataPack {
  data:Hero[]
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros')
    return of(HEROS)
  }
  getHeros2(): Promise<HeroDataPack>{
    return Axios.get('/api/getHeroes')
  }
}