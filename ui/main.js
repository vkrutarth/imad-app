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
  request.open('GET','http://vanesam.imad.hasura-app.io/count',true);
  request.send(null);
};
