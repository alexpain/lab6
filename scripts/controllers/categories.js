
app.controller('catCtrl', function($scope, $http) {

  $scope.cat = function () {
    var elem = angular.element(document.querySelector(".home"));
    var categ = angular.element(document.querySelector(".categories"));
    var category = angular.element(document.querySelector(".category"));
    var catName = angular.element(document.querySelector(".cat"));
    var bigCategory = angular.element(document.querySelector("#big-category"));


    elem.css("background","#000");
    elem.css("color","#fff");

    categ.css("background","#fff000");
    categ.css("color","#000");
    bigCategory.css("display","none");

    $http.get("https://jsworkshop.000webhostapp.com/?model=category")
    .then(function(response) {
        $scope.category = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        console.log(response.statusText);
        category.css("background","#fff000");

    });
    catName.css("display", "block");
  }

  $scope.home = function () {

    var elem = angular.element(document.querySelector(".home"));
    var categ = angular.element(document.querySelector(".categories"));
    var catName = angular.element(document.querySelector(".cat"));
    var category = angular.element(document.querySelector(".category"));
    var banner = angular.element(document.querySelector(".banner"));
    var products = angular.element(document.querySelector(".products"));
    var bigCategory = angular.element(document.querySelector(".big-category"));
    var products = angular.element(document.querySelector(".products"));
    var h1 = angular.element(document.querySelector("h1"));

    bigCategory.css("display","block");
    catName.css("display", "none");
    h1.css("display", "none");
    products.css("display", "none");

    category.css("background", "#222")

    elem.css("background","#fff000");
    elem.css("color","#000");

    categ.css("background","#000");
    categ.css("color","#fff");

    banner.css("display","block");
    products.css("display","none");


  }
});
