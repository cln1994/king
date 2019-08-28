var corridor_list = document.getElementsByClassName("corridor-list")[0];
var cl_imgs = corridor_list.getElementsByTagName("img");
var cl_left = document.getElementsByClassName("lfet-btn")[0];
var cl_right = document.getElementsByClassName("right-btn")[0];
var imgs = [];
for (var i = 0;i<cl_imgs.length;i++) { 
  imgs.push(cl_imgs[i].getAttribute("src"));
}

cl_left.onclick = function () { 
  imgs.push(imgs[0]);
  imgs.shift();
  for (var i = 0;i<cl_imgs.length;i++) { 
    cl_imgs[i].setAttribute("src",imgs[i]);
  }
}
cl_right.onclick = function () { 
  imgs.unshift(imgs[2]);
  imgs.pop();
  for (var i = 0;i<cl_imgs.length;i++) { 
    cl_imgs[i].setAttribute("src",imgs[i]);
  }
}


// 选项卡
var boxc_left = document.getElementsByClassName("boxc-left")[0];
var dds = boxc_left.getElementsByClassName("dd");
var ps = boxc_left.getElementsByTagName("p");
var box_title = document.getElementsByClassName("box-title")[0];
var spans = box_title.getElementsByTagName("span");
var arr = [["湖畔公主馆","卢森堡长廊","星辰水晶教堂","圣恩教堂","依云湖"],
          ["星光·夏朵","卢森堡长廊","星辰水晶教堂","圣恩教堂","依云湖"],
          ["秘密花园","卢森堡长廊","星辰水晶教堂","圣恩教堂","依云湖"],
          ["梦幻空间","卢森堡长廊","星辰水晶教堂","圣恩教堂","依云湖"]]
          ;
var company_profile = document.getElementsByClassName("corridor")[0];
var divs = company_profile.children;
var arr1=[];
// console.log(dds);
for (var i = 2; i < ps.length; i++) { 
  ps[i].index = i;
  ps[i].onclick = function () {
    for (var i = 2; i < ps.length;i++) {  
      ps[i].style.color = "#333333";
      ps[i].children[0].className = "iconfont icon-danxuan lefticon1";
      ps[i].children[1].className = "";
      ps[i].children[2].className = "jian1";
      // divs[i - 2].style.display = "none";
      dds[i - 2].style.height="0px";
    }
    for(var n=0;n<arr1.length;n++){ 
      arr1[n].className="little";
    }
    this.style.color = "#850914";
    this.children[0].className = "iconfont icon-danxuan lefticon";
    this.children[1].className = "jia";
    this.children[2].className = "jian";
    //  console.log(divs[(this.index)-2]);
    spans[spans.length - 3].innerHTML = arr[(this.index) - 2][0];
    spans[spans.length - 1].innerHTML = arr[(this.index) - 2][1];
    dds[(this.index) - 2].style.height="138px";
    // console.log(this.index);
    // console.log(arr1[4*(this.index-2)]);
    arr1[4*(this.index-2)].className="little active";
  }
}

for(var i=0;i<dds.length;i++){
 
  var littles= dds[i].getElementsByClassName("little");
  // console.log(littles);
  for(var j=0;j<littles.length;j++){
    
    arr1.push(littles[j]);
    littles[j].index=arr1.length-1;
    littles[j].onclick = function(){
      // console.log(this.index);
      for(var n=0;n<arr1.length;n++){ 
        arr1[n].className="little";
      }
      for(var m=0;m<divs.length;m++){
        divs[m].style.display="none";
      }
      this.className="little active";
      spans[spans.length - 1].innerHTML = arr[this.index%4][this.index%4+1];
      divs[this.index%4].style.display="block";
    }
  }
}



















