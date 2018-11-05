app.controller("myCtrl", function ($scope, $http)
{
  $scope.firstName = "Lev";
  $scope.lastName = "t";


  $http.get("getUsers.php")
    .then(function (response)
    {
        $scope.myData = response.data.records;
    });
});
