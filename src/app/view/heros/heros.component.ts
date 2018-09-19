import { Component, OnInit } from '@angular/core';
import Hero from '../../entity/Hero';
import { heroList } from '../../mock/herosList';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroService } from '../../service/hero/hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name : 'name'
  }
  heros: Hero[];
  selectHero: Hero

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(item) {
    this.selectHero = item;
    console.log(this.selectHero);
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heros => this.heros = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

}
