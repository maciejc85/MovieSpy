import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
    selector: "search",
    templateUrl: "app/components/search/search.html",
    styleUrls: ["app/components/search/search.css"]
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
                this.searchService.searchHistory.push(response);
                
                this.searchService.saveMovie(response).subscribe(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                })


                console.log(this.searchService.searchHistory);
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