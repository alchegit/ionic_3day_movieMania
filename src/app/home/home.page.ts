import { Component, OnInit } from "@angular/core";
import { MovieService } from "../service/movie.service";
import { MovieModel } from "../model/movie.model";
import { Observable } from "rxjs";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: [ "home.page.scss" ],
})
export class HomePage implements OnInit {

	public searchText: string;
	public movies: Array<any>;

	constructor(private movieService: MovieService) {
	}

	searchMovies() {
		console.log("this.searchText: " + this.searchText);
		this.movieService.searchMovieByKeyword(this.searchText).subscribe( result => {
			console.log(result);
			this.movies = result.items;
		});
		this.searchText = "";
	}

	ngOnInit(): void {
		this.movieService.searchMovieByKeyword("마블").subscribe( result => {
			console.log(result);
			this.movies = result.items;
		});
	}
}

