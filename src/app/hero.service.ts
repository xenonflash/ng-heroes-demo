import { Injectable } from '@angular/core';
import { HEROS } from './mock/heros'
import { Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros')
    return of(HEROS)
  }
}
