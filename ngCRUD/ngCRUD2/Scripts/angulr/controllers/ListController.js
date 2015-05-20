EmpControllers.controller("ListController", ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/api/employeeApi').success(function (data) {
            $scope.employees = data;
        });
    }]
);
