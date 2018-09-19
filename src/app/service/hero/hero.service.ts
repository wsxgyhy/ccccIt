import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Hero from "../../entity/Hero";
import { heroList } from '../../mock/herosList';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl:string = 'api/heros';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private  messageService: MessageService,
    private http: HttpClient) { }
  
  getHero(id:number):Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('fetched heroes')),//对数据进行一次标记，流出
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      //加载错误信息
      this.log(`${operation} failed: ${error.message}`);
      // 让应用程序继续运行，返回一个空结果.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
}
