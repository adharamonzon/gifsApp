import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebarComponent.html'
})
export class SidebarComponent{

  get history () {
    return this.gifsService.history;
  }

  constructor(private gifsService: GifsService) { }

  search (query : string) {
    console.log(query);
    this.gifsService.searchGifs(query)
  }
}
