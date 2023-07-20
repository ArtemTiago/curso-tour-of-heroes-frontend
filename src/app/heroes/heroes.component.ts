import { Component, HostListener } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  @HostListener('keydown', ['$event'])
  onSelectKeyDown(event: KeyboardEvent, hero: Hero): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.onSelect(hero);
    }
  }
}
