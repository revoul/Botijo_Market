(function(){
	angular.module('botijoMarket.services', [])
		.factory('productosServices', ['$http', '$q', function ($http, $q) {
			function all(){
				var deferred = $q.defer();
				$http.get('/productos.json')
					.success(function(data){
						deferred.resolve(data);
					});
				return deferred.promise;
			}
			return {
				all: all
			}
		}]);
})();