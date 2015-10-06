(function(){
	var app = angular.module('BotijoMarket', [
		'ngRoute',
		'botijoMarket.controllers',
		'botijoMarket.directives',
		'botijoMarket.services',
		'botijoMarket.filters'
	]);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				activeNav: 1
			})
			.when('/productos',{
				templateUrl: 'views/productos.html',
				activeNav: 2
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

})();