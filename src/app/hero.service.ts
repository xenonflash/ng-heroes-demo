import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { HEROS } from './mock/heros'
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
  private heroesUrl = 'api/getHeroes'
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  getHeros(): Observable<HeroDataPack> {
    this.log('fetched data')
    return this.http.get<HeroDataPack>(this.heroesUrl)
  }
  private log(msg: string) {
    this.messageService.add(msg)
  }
  getHeros2(): Promise<HeroDataPack>{
    return Axios.get('/api/getHeroes')
  }
}