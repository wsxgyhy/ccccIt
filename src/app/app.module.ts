import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HerosComponent } from './view/heros/heros.component';
import { HeroDetailComponent } from './view/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { InMemoryDataService }  from './mock/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    //mock服务，请在正式启用后台服务前注掉此处
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
