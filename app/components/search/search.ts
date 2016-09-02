import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { SearchService } from './search.service';
//import { MovieFactoryService } from './movie.factory';

@Component({
    selector: "search",
    templateUrl: "app/components/search/search.html",
    styleUrls: ["app/components/search/search.css"],
    providers: [SearchService]
})
export class SearchComponent implements OnInit {

    search: SearchItem = new SearchItem();

    constructor(private searchService: SearchService) { }

    ngOnInit() { }

    onSubmit() {
        console.log(this.search.searchQuery);
        this.searchService.searchMovies(this.search.searchQuery)
            .subscribe(
            response => {
                this.search.response = response;
                console.log(this.search.response);
            },
            error => { this.search.error = <any>error; console.log(error); });
    }
};

export class SearchItem {
    searchQuery: string;
    response: any;
    error: string;
    constructor() {
        this.searchQuery = '';
        this.response = {};
        this.error = '';
    }

}