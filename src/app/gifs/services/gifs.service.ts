import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/* provieIn root hace que este disponible en toda la app */
export class GifsService {
  private _history: string[] = [];

  get history() {
    return [...this._history];
  }

  searchGifs(query: string) {   
    
    query = query.trim().toLowerCase();

    if( !this._history.includes(query)) {
      this._history.unshift(query); 
    }

    this._history = this._history.splice(0,10);
    //primero insertamos y luego lo cortamos si son mas de 10. 
  }

}
