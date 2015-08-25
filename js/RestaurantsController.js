restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [
   { name: 'Andina', type: 'Peruvian', location: 'Pearl', price: '$$$' }
 ];
 $scope.addRestaurant = function() {
   var price = '';
   if ($scope.checkboxModel.value1 === true) {
     price = '$';
   }
   else if ($scope.checkboxModel.value2 === true) {
     price = '$$';
   }
   $scope.restaurants.push({name: $scope.restaurantName, type: $scope.restaurantType, location: $scope.restaurantLocation, price: price });
   $scope.restauarantName = null;
 };
 $scope.checkboxModel = {
   value1 : '$',
   value2 : "$$"
 };
});
