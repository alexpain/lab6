'use strict';

app.controller('productCtrl',function ($scope, $http) {
  $scope.allProduct = [];
  $scope.clickCtry = function (e) {
    $scope.name = e.target.innerText;

    var category = angular.element(document.querySelector(".category"));
    var catName = angular.element(document.querySelector(".cat"));
    var banner = angular.element(document.querySelector(".banner"));
    var products = angular.element(document.querySelector(".products"));
    var bigCategory = angular.element(document.querySelector(".big-category"));

    bigCategory.css("display","block");
    catName.css("display", "none");

    $http.get("https://jsworkshop.000webhostapp.com/?model=product")
    .then(function(response) {
        $scope.allProduct = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        category.css("background","#222");
        console.log(response.statusText);
        var j = 0
        var n = $scope.allProduct.length;
        var tmp = [];
        for(let i = 0; i < n; i++){
          if(($scope.allProduct[i].category[0].name == $scope.name) || ($scope.allProduct[i].category[1].name == $scope.name)){
            tmp[j] = $scope.allProduct[i];
            j++;
          }
        }
        $scope.products = tmp;
    });
    category.css("background","#222");

    banner.css("display","none");
    products.css("display","block");
  }
  $scope.overflow = function () {
    var body = angular.element(document.querySelector("body"));
    body.css("overflow-y","scroll");
  }
});
