var movieApp = angular.module("movieApp", ['ui.router']);

var apiKey="dd9a8d8c5f7a40376e13acf42532267e";

movieApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("main", {
			url: "/main",
			templateUrl: "templates/main.html",
		})
		.state("main.movies", {
			url: "/movies",
			templateUrl: "templates/movies.html",
			controller: "movieCtrl"
		})
		.state('main.movieDetail', {
			url: "/movie/:id",
			templateUrl: "templates/movieinfo.html",
			controller: 'movieItemCtrl',
	    })
		.state("main.shows", {
			url: "/shows",
			templateUrl: "templates/shows.html",
			controller: "showsCtrl"
		})
		.state("main.showDetail", {
			url: "/showinfo/:id",
			templateUrl: "templates/showinfo.html",
			controller: "showDetailCtrl"
		});
	$urlRouterProvider.otherwise("/main/movies");
});










