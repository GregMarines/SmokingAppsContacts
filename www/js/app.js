var myApp = angular.module('myApp', [
'ngRoute',
'contactControllers'
]);

myApp.config (['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
	controller: 'ListController'
  }).
  when('/details/:itemId',{
    templateUrl: 'partials/details.html', 
	controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });  
	
}]);


function handleDeviceBackButton(){
    alert('ill never see this');
	navigator.notification.confirm(
		'Do you want to quit', 
        onConfirmQuit, 
        'QUIT TITLE', 
        'OK,Cancel'  
    );
}

function onConfirmQuit(button){
    if(button == "1"){
        setTimeout( function() { navigator.app.exitApp(); }); 
    }
}