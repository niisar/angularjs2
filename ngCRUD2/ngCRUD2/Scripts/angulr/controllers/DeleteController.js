EmpControllers.controller("DeleteController", ['$scope', '$http', '$routeParams', '$location',
        function ($scope, $http, $routeParams, $location) {

            $scope.id = $routeParams.id;
            $http.get('/api/employeeApi/' + $routeParams.id).success(function (data) {
                $scope.firstname = data.FirstName;
                $scope.lastname = data.LastName;
                $scope.country = data.Country;
                $scope.state = data.State;
                $scope.salary = data.Salary;
                $scope.active = data.IsActive;
                $scope.dob = data.DateofBirth;
                $scope.description = data.Description;
            });

            $scope.delete = function () {

                $http.delete('/api/employeeApi/' + $scope.id).success(function (data) {
                    $location.path('/list');
                }).error(function (data) {
                    $scope.error = "An error has occured while deleting employee! " + data;
                });
            };
        }
]);