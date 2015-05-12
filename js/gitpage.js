(function (){
	var app = angular.module('dolomyte');

	var HomeCtrl = function($scope, $location, $window){
		$scope.slide = 'slideOut';
		
		$scope.changePage = function(id){
			$location.path('/'+ id);
			$scope.slide = 'slideOut';
		};
		

		$scope.showNav = function(){
			if($scope.slide === 'slideOut'){
				$scope.slide = 'slideIn';
			}
			else if($scope.slide === 'slideIn'){
				$scope.slide = 'slideOut';
			}
		};

		$scope.github = function(){
			$window.open('https://github.com/HistoireDeBabar');
		};

		$scope.twitter = function(){
			$window.open('https://twitter.com/Histoiredebabar');
		};

	};

	app.controller('HomeCtrl', ['$scope', '$location','$window', HomeCtrl]);
})();