console.log('Loaded!');


var element=document.getElementById('main-text');
element.innerHTML='new value';


var img=document.getElementById('madi');
var d=0;
function movedown(){
    d=d+1;
    img.style.marginBottom=d+"px";
}

img.onclick=function() {
    var time=setInterval(movedown,20);
};
