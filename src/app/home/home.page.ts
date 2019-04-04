import { Component, OnInit } from "@angular/core";
import { MovieModel } from "../model/movie.model";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: [ "home.page.scss" ],
})
export class HomePage implements OnInit {

	movies: Object;

	constructor(private http: HttpClient) {
	}

	// 네이버에 접속해서 데이터를 가져온다
	ngOnInit(): void {
		// this.http.get("https://openapi.naver.com/v1/search/movie.json")
		this.http.get("assets/movies.json")
			.subscribe( res => {
				console.log(res);
				console.log(this.movies);
				this.movies = res;
			});
		console.log("code...?!");
	}
}

