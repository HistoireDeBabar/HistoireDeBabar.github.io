(function (){
	var app = angular.module('dolomyte');

	var HomeCtrl = function($scope, $location, $anchorScroll){
		$scope.slide = 'slideOut';
		
		$scope.changePage = function(id){
			$location.path('/'+ id);
			$scope.slide = 'slideOut';
		};
		

		$scope.showNav = function(){
			console.log($scope.slide);
			if($scope.slide === 'slideOut'){
				$scope.slide = 'slideIn';
			}
			else if($scope.slide === 'slideIn'){
				$scope.slide = 'slideOut';
			}
			console.log($scope.slide);
		};


	};

	app.controller('HomeCtrl', ['$scope', '$location', '$anchorScroll', HomeCtrl]);
})();