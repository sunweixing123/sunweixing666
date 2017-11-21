ocontainer=document.getElementById("container");
oimag=document.getElementById("imgs");
otab=document.getElementById("tab");
ali=otab.getElementsByTagName("li");
aimg=oimag.getElementsByTagName("img");
var inowindex=0;
for(var i=0;i<ali.length; i++){
    ali[i].index=i;
    ali[i].onmouseover=function(){
        inowindex=this.index;
        changeimag();
    };
}
function changeimag(){
    for(var i=0;i<ali.length;i++){
        ali[i].className="";
        aimg[i].className="";
    }
    ali[inowindex].className="selected";
    aimg[inowindex].className="selected";
}/**
 * Created by sunweixin on 2017/10/29.
 */
// 弹出层开始
ofouth2221=document.getElementById("fouth-2-2-2-1");
osubnav=document.getElementById("sub-nav");
ofouth2221.onmouseover=function(){
    ofouth2221.style.background="#ff6700";
    osubnav.style.display="block";
};
ofouth2221.onmouseout=function(){
    ofouth2221.style.background="#333";
    osubnav.style.display="none";
}
osubnav.onmouseover=function(){
    osubnav.style.display="block";
};
osubnav.onmouseout=function(){
    osubnav.style.display="none";
}