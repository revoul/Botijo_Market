(function () {
	angular.module('botijoMarket.filters', [])
		.filter('imageGen', function(){
			return function (arg){
				return '/images/'+arg+'.jpg';
			};
		});
})();