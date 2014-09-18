var contactControllers = angular.module('contactControllers', ['ngAnimate']);

contactControllers.controller('ListController',['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.contacts = data;
	$scope.contactOrder = 'FIRSTNAME'; 
  }); 
}]);

contactControllers.controller('DetailsController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('js/data.json').success(function(data){
    $scope.contacts = data;
	$scope.whichItem = $routeParams.itemId; 
	if ($routeParams.itemId > 0) {
	  $scope.prevItem = Number($routeParams.itemId)-1;
	} else {
	  $scope.prevItem = $scope.contacts.length-1;
	}
	
	if ($routeParams.itemId < $scope.contacts.length-1) {
	  $scope.nextItem = Number($routeParams.itemId)+1;
	} else {
	  $scope.nextItem = 0;
	}		
  }); 
}]);