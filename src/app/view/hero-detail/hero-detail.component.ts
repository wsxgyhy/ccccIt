import { Component, OnInit, Input } from '@angular/core';
import Hero from '../../entity/Hero'
import { HeroService } from '../../service/hero/hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero: Hero

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    
  }

  save():void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => alert('修改成功'));
  }

}
