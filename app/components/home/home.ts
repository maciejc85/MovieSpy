import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { TileComponents } from '../tile/tile'

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  //providers: [SearchService]
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchService) {


    console.log(searchService.searchHistory);



  }

  ngOnInit() {

    this.searchService.getMovies('').subscribe(
      response => {
        this.searchService.searchHistory = response;
      },
      error => { console.log(error); });
  }


}
