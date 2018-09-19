import { Component, OnInit } from '@angular/core';
import Hero from '../../entity/Hero';
import { heroList } from '../../mock/herosList';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'

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
  heros = heroList;
  selectHero: Hero

  constructor() { }

  ngOnInit() {
  }

  onSelect(item) {
    this.selectHero = item;
    console.log(this.selectHero)
  }

}
