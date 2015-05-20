﻿EmpControllers.controller("EditController", ['$scope', '$filter', '$http', '$routeParams', '$location',
    function ($scope, $filter, $http, $routeParams, $location) {

        $http.get('/api/country').success(function (data) {
            $scope.countries = data;
        });

        $scope.id = 0;
        $scope.getStates = function () {
            var country = $scope.country;
            if (country) {
                $http.get('/api/country/' + country).success(function (data) {
                    $scope.states = data;
                });
            }
            else {
                $scope.states = null;
            }
        }

        $scope.save = function () {

            var obj = {
                EmployeeId: $scope.id,
                FirstName: $scope.firstname,
                LastName: $scope.lastname,
                Country: $scope.country,
                State: $scope.state,
                Salary: $scope.salary,
                IsActive: $scope.active,
                Description: $scope.description,
                DateofBirth: $scope.dob
            };

            if ($scope.id == 0) {

                $http.post('/api/employeeApi/', obj).success(function (data) {
                    $location.path('/list');
                }).error(function (data) {
                    $scope.error = "An error has occured while adding employee! " + data.ExceptionMessage;
                });
            }
            else {

                $http.put('/api/employeeApi/', obj).success(function (data) {
                    $location.path('/list');
                }).error(function (data) {
                    console.log(data);
                    $scope.error = "An Error has occured while Saving customer! " + data.ExceptionMessage;
                });
            }
        }

        if ($routeParams.id) {

            $scope.id = $routeParams.id;
            $scope.title = "Edit Employee";

            $http.get('/api/employeeApi/' + $routeParams.id).success(function (data) {
                $scope.firstname = data.FirstName;
                $scope.lastname = data.LastName;
                $scope.country = data.Country;
                $scope.state = data.State;
                $scope.salary = data.Salary;
                $scope.active = data.IsActive;
                $scope.description = data.Description;
                $scope.dob = new Date(data.DateofBirth);

                $scope.getStates();
            });
        }
        else {
            $scope.title = "Create New Employee";
        }
    }
]);