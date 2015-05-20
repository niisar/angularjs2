EmpApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/list', {
        templateUrl: '/Employee/list',
        controller: 'ListController'
    }).
    when('/create', {
        templateUrl: '/Employee/edit',
        controller: 'EditController'
    }).
    when('/edit/:id', {
        templateUrl: '/Employee/edit',
        controller: 'EditController'
    }).
    when('/delete/:id', {
        templateUrl: '/Employee/delete',
        controller: 'DeleteController'
    }).
    otherwise({
        redirectTo: '/list'
    });

}]);