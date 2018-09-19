import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './view/heros/heros.component';
import { DashboardComponent }   from './view/dashboard/dashboard.component';
import { HeroDetailComponent }  from './view/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
