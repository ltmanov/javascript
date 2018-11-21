var app = angular.module('shopApp', []);

app.controller('shopController', function($scope, $http) {

getItem(); // Load all available items

$scope.createItem = function (item) {
$http.post("createItem.php?item="+item).success(function(data){
getItem();
$scope.itemInput = "";
});
};

function getItem(){
$http.post("readItem.php").success(function(data){
$scope.items = data;
});
};

$scope.changeStatus = function(item, status, task) {
if(status=='2'){status='0';}else{status='2';}
$http.post("updateItem.php?itemID="+item+"&status="+status).success(function(data){
getItem();
});
};

$scope.deleteItem = function (item) {
if(confirm("Are you sure to delete this item?")){
$http.post("deleteItem.php?itemID="+item).success(function(data){
getItem();
});
}
};

$scope.clearItem = function () {
if(confirm("Delete all checked items?")){
$http.post("clearItem.php").success(function(data){
getItem();
});
}
};

});
