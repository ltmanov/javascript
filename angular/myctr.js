app.controller("myctr", function ($scope, $http)
{
  $scope.firstName = "Lev";
  $scope.lastName = "t";


  $http.get("angular.php").then(function (response)
    {
        $scope.myData = response.data.records;
    });
});
