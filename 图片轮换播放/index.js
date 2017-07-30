/**
 * Created by HS on 2016/11/27.
 */
var oContainter = document.getElementById('containter');
var oContent = document.getElementById('content');
var aImg = oContent.getElementsByTagName('img');

var oWallImg = document.getElementById('imgWall');
var aWallImg = oWallImg.getElementsByTagName('img');

var oInfo = document.getElementById('info');
var aFirst = document.getElementById('first');

var oArrow = document.getElementById('arrow');
var oNext = document.getElementById('next');
var oPrev = document.getElementById('prev');
var zIndex = 9;
var iNow = 0;
oNext.onmouseover=function(){
    oNext.style.display='block';
}

for (var i = 0; i < aWallImg.length; i++) {
    aWallImg[i].className = 'imgOpacity';
    aWallImg[i].index = i;
    aWallImg[i].onmouseover = function () {
        ChangeImg(this.index);
    }
}
aWallImg[iNow].className = 'selected';

oNext.onclick = function () {
    iNow++;
    if (iNow == aImg.length) {
        iNow = 0;
    }
    ChangeImg(iNow);
}
oPrev.onclick = function () {
    iNow--;
    if (iNow == -1) {
        iNow = aImg.length - 1;
    }
    ChangeImg(iNow);
}


for (var i = 0; i < aWallImg.length; i++) {
    aWallImg[i].index = i;
    aWallImg[i].onmouseover = function () {
        animate(this, {
            opacity: 100
        });
    };
    aWallImg[i].onmouseout = function () {
        if (this.index != iNow) {
            animate(this, {
                opacity: 30
            });
        }

    };
    aWallImg[i].onclick = function () {
        if (this.index != iNow) {
            ChangeImg(this.index);
        }
    };
}

function ChangeImg(idex) {
    iNow = idex;
    for (var i = 0; i < aWallImg.length; i++) {
        aWallImg[i].style.opacity = .3;
        aWallImg[i].style.filter = "alpha(opacity=30)";
    }
    aWallImg[idex].style.opacity = 1;
    aWallImg[idex].style.filter = "alpha(opacity=100)";
    aImg[idex].style.opacity = 0;
    aImg[idex].style.filter = "alpha(opacity=0)";
    aImg[idex].style.zIndex = ++zIndex;
    animate(aImg[idex], {opacity: 100});
    aFirst.innerHTML = idex + 1;

    var iLeft = 0;
    if (idex == 0 || idex == 1) {
        iLeft = 0;
    } else if (idex == aWallImg.length - 1 || idex == aWallImg.length - 2) {
        iLeft = aWallImg.length / 2;
    } else {
        iLeft = idex - 1;
    }
    animate(oWallImg, {left: -iLeft * (aWallImg[0].offsetWidth + 15)})
}

var timer;
function run(){
    timer=setInterval(function(){oNext.click()},1000)
}
run();
oContainter.onmouseover=function(){
    clearInterval(timer);
}
oContainter.onmouseout=function(){
    run();
}


