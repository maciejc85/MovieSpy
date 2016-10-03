import { Component, Input } from '@angular/core';


@Component({
  selector: 'tile',
  templateUrl: 'app/components/tile/tile.html',
  styleUrls: ['app/components/tile/tile.css']
})
export class TileComponents {

  constructor(){}

  _movie: string;

  @Input()
  set movie(movie: string) {
    this._movie = movie;
    console.log(this.movie);
  }

  get movie() { return this._movie; }

}