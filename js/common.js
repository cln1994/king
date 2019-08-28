// 导航效果
var nav = document.getElementsByClassName("nav")[0];
var nav_as = nav.getElementsByTagName("a");
for (var i = 0; i < nav_as.length; i++) {
  var n;
  if (nav_as[i].className=="active") { 
    n = i;
  }
  nav_as[i].onmouseover = function () { 
    this.className = "active";
  }
  nav_as[i].onmouseout = function () { 
    
    for (var i = 0; i < nav_as.length; i++) { 
      nav_as[i].className = "";
    }
    nav_as[n].className = "active";
  }
}



































