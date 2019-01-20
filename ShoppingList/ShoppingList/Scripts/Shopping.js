var app = angular.module("shoppingListApp", []);
app.controller("shoppingController", function ($scope) {

    $scope.shoppingList = [];
    $scope.shoppingList.itemName;
    $scope.shoppingList.quantity; 

    $scope.addList = function () {
        $scope.shoppingList.push({ itemName: $scope.newItem, quantity: 1 });
        $scope.shoppingList.quantity = 1;
        $scope.newItem = '';
    }

    $scope.removeItem = function (index) {
        $scope.shoppingList.splice(index, 1);
    }

    $scope.addOne = function (index) {
        $scope.shoppingList[index].quantity += 1;
    }

    $scope.minusOne = function (index) {
        $scope.shoppingList[index].quantity -= 1;
        if ($scope.shoppingList[index].quantity == 0) {
            $scope.shoppingList.splice(index, 1);
        }
    }

});