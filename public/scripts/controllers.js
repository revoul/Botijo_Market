(function(){
	angular.module('botijoMarket.controllers', [])
		.controller('NavController', function($scope, $route){
			$scope.$route = $route;
		})
		.controller('ProductosController', ['$scope', 'productosServices', function($scope, productosServices){
			productosServices.all().then(function(data){
				$scope.productos = data;
			});
		}]);
})();