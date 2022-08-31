import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
/* provieIn root hace que este disponible en toda la app */
export class GifsService {

  private apiKey : string = 'dHtPrN80u1qv0wFTEqyrgtHVZHEVCbWG'
  private _history: string[] = [];

  //TODO cambiar el tipaydo any
  public results : Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor( private http: HttpClient){}

  searchGifs(query: string) {   
    
    query = query.trim().toLowerCase();

    if( !this._history.includes(query)) {
      this._history.unshift(query); 
    }

    this._history = this._history.splice(0,10);
    //primero insertamos y luego lo cortamos si son mas de 10. 

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=dHtPrN80u1qv0wFTEqyrgtHVZHEVCbWG&q=${query}&limit=10`)
    .subscribe( (resp) => {
      console.log(resp.data)
      this.results = resp.data           
    })
  }
}
