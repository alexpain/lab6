window.onload = function() {
	window.scrollTo(0,0);
	var up = document.getElementById('scrollup');
  var scrollUp = angular.element(document.querySelector("#scrollup"));
  var bigCategory = angular.element(document.querySelector(".big-category"));

	scrollUp.onmouseover = function() {
    scrollUp.css("opacity","0.3");
    scrollUp.css("filter","alpha(opacity=30)");
	};

	scrollUp.onmouseout = function() {
    scrollUp.css("opacity","0.5");
    scrollUp.css("filter","alpha(opacity=50)");
	};

	up.onclick = function() {
		window.scrollTo(0,0);
	};


	window.onscroll = function () {
		if ( window.pageYOffset > 0 ) {
      scrollUp.css("display","block");
      bigCategory.css("margin","-90px -350px 30px");
      bigCategory.css("color","#222");
			bigCategory.css("background","#ffffffcc");
		} else {
      scrollUp.css("display","none");
      bigCategory.css("margin","-50px -350px 30px");
      bigCategory.css("color","#fff");
			bigCategory.css("background","none");
		}
	};
};
