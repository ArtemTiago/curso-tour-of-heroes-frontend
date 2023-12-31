import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import {Hero} from './hero.model'
import  {HEROES} from './mock-heroes'
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes ');
    return heroes;
  }

    getHero(id: number): Observable<Hero> {
      const hero = HEROES.find(hero => hero.id === id)!;
      this.messageService.add(`HeroService: fetched hero id=%{id}`);
      return of(hero);
}
}
