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
        $http.get("https://jsworkshop.000webhostapp.com/?model=shop")
        .then(function (response) {
          $scope.shops = response.data;
          console.log(response.statusText);

          let j = 0
          let n = $scope.allProduct.length;
          let tmp = [];

          for(let i = 0; i < n; i++){
            $scope.allProduct[i].shop = [];
            for (let k = 0; k < $scope.shops.length; k++) {
              $scope.allProduct[i].shop.push($scope.shops[k].stock[i]);
            }
          }

          for(let i = 0; i < n; i++){
            if(($scope.allProduct[i].category[0].name == $scope.name) || ($scope.allProduct[i].category[1].name == $scope.name)){
              tmp[j] = $scope.allProduct[i];
              j++;
            }
          }
          $scope.products = tmp;
        });


    });
    category.css("background","#222");

    banner.css("display","none");
    products.css("display","block");
  }
  $scope.overflow = function () {
    var body = angular.element(document.querySelector("body"));
    body.css("overflow-y","scroll");
  }
  $scope.show = function () {
    var wind = angular.element(document.querySelector('.m-window'));
    var wrap = angular.element(document.querySelector('#wrap'));
    var index = angular.element(document.querySelector('input[name="index"]:checked'));


    $scope.showArr = $scope.products[+index[0].value];
    wrap.css("display","block");
    wind.css("display","block");
  }

  $scope.bue = function () {
    var wind = angular.element(document.querySelector('.m-window'));
    var wrap = angular.element(document.querySelector('#wrap'));
    var select = angular.element(document.querySelector('select'));
    var date = angular.element(document.querySelector('input[type="date"]'));
    wrap.css("display","none");
    wind.css("display","none");
    if (localStorage.basket) {
      var obj = JSON.parse(localStorage.getItem("basket"));
      var a = [];
      a.push($scope.showArr.name);
      a.push(select[0].value);
      a.push(date[0].value);
      obj.push(a);
      var sObj = JSON.stringify(obj)
      localStorage.setItem('basket', sObj);
    }else{
      var obj = [];
      var a = [];
      a.push($scope.showArr.name);
      a.push(select[0].value);
      a.push(date[0].value);
      obj.push(a);
      var sObj = JSON.stringify(obj)
      localStorage.setItem('basket', sObj);
    }

    alert(localStorage.basket);



  }
});
