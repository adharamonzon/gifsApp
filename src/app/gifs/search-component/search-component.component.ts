import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html'
})
export class SearchComponentComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>; 
  //txtSearch!: la negación quiere decir que no va a haber asuencia de este elemento. 

  constructor(private gifsService: GifsService) {}

  searchGif() {
    const value = this.txtSearch.nativeElement.value;

    if(value.trim().length === 0) {
      //eliminamos los espacios, evitamos buscar si el imput está vacío
      return
    }
    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
