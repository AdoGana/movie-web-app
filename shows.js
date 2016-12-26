var mainShowUrl = "https://api.themoviedb.org/3/tv/";
var searchShowUrl = "https://api.themoviedb.org/3/search/tv?api_key=";

movieApp.controller('showsCtrl', function($scope, $http) {

	var topRatedUrl = mainShowUrl + "top_rated?api_key=" + apiKey;
			$http.get(topRatedUrl).then(function(response) {
			$scope.shows = response.data.results;
		});
	$scope.change = function($stateParams) {
			$http.get(topRatedUrl).then(function(response) {
			$scope.shows = response.data.results;
		});
	var ssUrl = searchShowUrl + apiKey + "&query=" + $stateParams.name;
			$http.get(ssUrl).then(function(response) {
			$scope.shows = response.data.results;
		});
	};
});

movieApp.controller('showDetailCtrl', function($scope, $http, $stateParams) {
    var itemDetailUrl = mainShowUrl + $stateParams.id +"?api_key=" + apiKey ;
    $http.get(itemDetailUrl).then(function(response) {
        $scope.show = response.data;
    });
});