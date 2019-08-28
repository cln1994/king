// 淡入淡出轮播
var slider = document.getElementsByClassName("slider")[0];
var btns = slider.getElementsByTagName("button");
var imgs = slider.getElementsByTagName("img");
var lis = slider.getElementsByTagName("li");

var j = 0;
// 左右轮播
for (var i = 0; i < btns.length;i++) { 
  btns[i].onclick = function () { 
    if (this.innerHTML == "&gt;") {
      moveright();
    } else { 
      j--;
      if (j == -1) {
        j = 2;
      }
      clear();
      imgs[j].className = "active";
      lis[j].className = "active";
    }
  }
}
// 点击小圆点轮播
for (var i = 0; i < lis.length;i++){
  lis[i].onclick = function () { 
    j = this.getAttribute("on");
    clear();
    this.className = "active";
    imgs[j].className = "active";
  }
}
//设置开启定时器
var timer = setInterval(moveright, 3000);
// 鼠标移入定时器停止
slider.onmouseover = function () {
  clearTimeout(timer);
}
// 鼠标移出又触发定时器
slider.onmouseout = function () {
  timer = setInterval(moveright,3000);
}


// 点击按钮向左轮播封装为一个函数便于定时器调用
function moveright() { 
  j++;
  if (j == 3) {
    j = 0;
  }
  clear();
  imgs[j].className = "active";
  lis[j].className = "active";
}

// 封装清除class=active
function clear() { 
  for (var i = 0; i < imgs.length-1;i++) { 
    imgs[i].className = "";
    lis[i].className = "";
  }
}
