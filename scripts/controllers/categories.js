
app.controller('catCtrl', function($scope, $http) {

  $scope.cat = function () {
    var elem = angular.element(document.querySelector(".home"));
    var categ = angular.element(document.querySelector(".categories"));
    var category = angular.element(document.querySelector(".category"));
    var catName = angular.element(document.querySelector(".cat"));


    elem.css("background","#000");
    elem.css("color","#fff");

    categ.css("background","#fff000");
    categ.css("color","#000");

    $http.get("https://jsworkshop.000webhostapp.com/?model=category")
    .then(function(response) {
        $scope.category = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        category.css("background","#fff000");

    });
    catName.css("display", "block");
  }

  $scope.home = function () {

    var elem = angular.element(document.querySelector(".home"));
    var categ = angular.element(document.querySelector(".categories"));
    var catName = angular.element(document.querySelector(".cat"));
    var category = angular.element(document.querySelector(".category"));

    catName.css("display", "none");

    category.css("background", "#222")

    elem.css("background","#fff000");
    elem.css("color","#000");

    categ.css("background","#000");
    categ.css("color","#fff");

  }
});
