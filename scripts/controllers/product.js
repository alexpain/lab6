'use strict';

app.controller('productCtrl',function ($scope, $http) {
  $scope.clickCtry = function (e) {
    $scope.name = e.target.innerText;
    var category = angular.element(document.querySelector(".category"));
    var catName = angular.element(document.querySelector(".cat"));

    catName.css("display", "none");

    $http.get("https://jsworkshop.000webhostapp.com/?model=product")
    .then(function(response) {
        $scope.allProduct = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        
        category.css("background","#222");

    });
    category.css("background","#222");

    var j = 0
    var n = $scope.allProduct.length;
    for(let i = 0; i < n; i++){
      if($scope.allProduct[i].category[0].name == $scope.name){
        $scope.products[j] = $scope.allProduct[i];
        j++;
      }
    }

  }
  $scope.check = function () {
    var j = 0
    var n = $scope.allProduct.length();
    for(let i = 0; i < n; i++){
      if($scope.allProduct[i].category[0].name == $scope.name){
        $scope.products[j] = $scope.allProduct[i];
        j++;
      }
    }
  }
});
