restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [
   { name: 'Andina', type: 'Peruvian', location: 'Pearl', price: '$$$' }
 ];
 $scope.addRestaurant = function() {
   $scope.restaurants.push({name: $scope.restaurantName, type: $scope.restaurantType, location: $scope.restaurantLocation, price: $scope.restaurantPrice});
   $scope.restauarantName = null;
 };
});
