var boxc_left = document.getElementsByClassName("boxc-left")[0];
var ps = boxc_left.getElementsByTagName("p");
var box_title = document.getElementsByClassName("box-title")[0];
var spans = box_title.getElementsByTagName("span");
var arr = ["陈漫","陈默默","张悦","尤奕","伊超","童梦"];
var company_profile = document.getElementsByClassName("choose-photo")[0];
var divs = company_profile.children;


for (var i = 2; i < ps.length; i++) { 
  ps[i].index = i;
  ps[i].onclick = function () {
    for (var i = 2; i < ps.length;i++) {  
      ps[i].style.color = "#333333";
      ps[i].children[0].className = "iconfont icon-danxuan lefticon1";
      ps[i].children[1].className = "";
      ps[i].children[2].className = "jian1";
      divs[i - 2].style.display = "none";
    }
    this.style.color = "#850914";
    this.children[0].className = "iconfont icon-danxuan lefticon";
    this.children[1].className = "jia";
    this.children[2].className = "jian";
    //  console.log(divs[(this.index)-2]);
    spans[spans.length - 1].innerHTML = arr[(this.index) - 2];
    divs[(this.index) - 2].style.display = "block";
  }
}













