'use strict';

app.controller('productCtrl',function ($scope, $http) {
  $scope.allProduct = [];
  $scope.maxCost = 0;
  $scope.clickCtry = function (e) {
    $scope.name = e.target.innerText;

    var category = angular.element(document.querySelector(".category"));
    var catName = angular.element(document.querySelector(".cat"));
    var banner = angular.element(document.querySelector(".banner"));
    var products = angular.element(document.querySelector(".products"));
    var bigCategory = angular.element(document.querySelector(".big-category"));
    var products = angular.element(document.querySelector(".products"));
    var h1 = angular.element(document.querySelector("h1"));

    bigCategory.css("display","block");
    products.css("display","block");
    h1.css("display","block");
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
              if ($scope.maxCost <= $scope.allProduct[i].shop[0].cost) {
                $scope.maxCost = $scope.allProduct[i].shop[0].cost;
              }
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
  }
  $scope.close = function () {
    var wind = angular.element(document.querySelector('.m-window'));
    var wrap = angular.element(document.querySelector('#wrap'));
    var basket = angular.element(document.querySelector('.basket-window'));
    basket.css("display","none");
    wrap.css("display","none");
    wind.css("display","none");
  }
  $scope.basket = function () {
    if (!localStorage.basket) {
      alert("Корзина пуста");
    }else{
      $scope.obj = JSON.parse(localStorage.getItem("basket"));
      var wind = angular.element(document.querySelector('.basket-window'));
      var wrap = angular.element(document.querySelector('#wrap'));
      wrap.css("display","block");
      wind.css("display","block");
    }

  }
  $scope.filter = function () {
    var cost = angular.element(document.querySelector('.rz-pointer-max'));
    var j = 0;
    var tmp = [];
    for(let i = 0; i < $scope.allProduct.length; i++){
      if(($scope.allProduct[i].category[0].name == $scope.name) || ($scope.allProduct[i].category[1].name == $scope.name)){
        tmp[j] = $scope.allProduct[i];
        j++;
      }
    }
    $scope.products = tmp;
    var fName = angular.element(document.querySelector('input[name="fName"]'));
    tmp = [];
     j = 0;
    for(let i = 0; i < $scope.products.length; i++){
      if(($scope.products[i].name.indexOf(fName[0].value) == 0) && ($scope.maxCost > $scope.products[i].shop[0].cost) && ($scope.slider.min < $scope.products[i].shop[0].cost)){
        tmp[j] = $scope.products[i];
        j++;
      }
    }
    $scope.products = tmp;
  };

  $scope.slider = {
    min: 0,
    options: {
        floor: 0,
        ceil: 6000,
        step: 1,
        minRange: 1,
        maxRange: 6000
    }
};
});
