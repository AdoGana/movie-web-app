var mainUrl = "https://api.themoviedb.org/3/movie/";
var searchMovieUrl = "https://api.themoviedb.org/3/search/movie?api_key=";

movieApp.controller('movieCtrl', function($scope, $http) {

	var topRatedUrl = mainUrl + "top_rated?api_key=" + apiKey;
			$http.get(topRatedUrl).then(function(response) {
			$scope.movies = response.data.results;
		});
	$scope.change = function($stateParams) {
			$http.get(topRatedUrl).then(function(response) {
			$scope.movies = response.data.results;
		});
	var smUrl = searchMovieUrl + apiKey + "&query=" + $stateParams.title;
			$http.get(smUrl).then(function(response) {
			$scope.movies = response.data.results;
		});
	};
});

movieApp.controller('movieItemCtrl', function($scope, $http, $stateParams) {
    var itemUrl = mainUrl + $stateParams.id +"?api_key=" + apiKey ;
    $http.get(itemUrl).then(function(response) {
        $scope.movie = response.data;
    });
});