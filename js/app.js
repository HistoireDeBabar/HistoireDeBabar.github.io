(function (){

	//Create App
	var app = angular.module('dolomyte', ['ngRoute']);


	//Register Routes
	app.config(function($routeProvider){
    $routeProvider
      .when("/home", {
        templateUrl: "dolomyte.html",
        controller: "HomeCtrl"
      })
      .otherwise({redirectTo:"/home"});
  });



})();