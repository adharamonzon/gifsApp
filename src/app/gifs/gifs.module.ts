import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ResultsComponent } from './results-component/results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponentComponent,
    ResultsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
