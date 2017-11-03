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
