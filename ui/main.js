var button=document.getElementById('counts');

button.onclick=function () {
  var request=new XMLHttpRequest();
  request.onreadystatechange=function () {
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
          var counter = request.responseText;
          var s=document.getElementById('p');
          s.innerHTML =counter.toString();
        }
    }
  };
  request.open('GET','http://localhost:8080/count',true);
  request.send(null);
};



var submit=document.getElementById('submit');
submit.onclick=function () {

  var request=new XMLHttpRequest();
  request.onreadystatechange=function () {
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){
          var names=request.responseText;
          names=JSON.parse(names);
          var list='';
          for(var i=0;i<name.length;i++){
            list += '<li>'+names[i]+'</li>';
          }
          var ul=document.getElementById('namelist');
          ul.innerHTML=list;
        }
    }
  };
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  request.open('GET','http://localhost:8080/submit-name?name='+name,true);
  request.send(null);

};
