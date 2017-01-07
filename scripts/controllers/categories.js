cat.controller('catCntr',function ($scope, $http) {
  $http.get('https://jsworkshop.000webhostapp.com/?model=category', conf).success(function(data, status, headers, config) {
    $scope.data=data;
    $scope.loaded=true;
    console.log(config);
  }).error(function(data, status, headers, config) {
    console.log("код ответа: " +status);
  })
});
