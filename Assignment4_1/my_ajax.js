$(document).ready(function() {
  console.log('ready!');
  $('#hide').click(function() {
    $(this).hide();
  });
});

function hd2(){
  $('#hide2').css({'display':'none'});
}
//animate

var index;

get();

function get(){
  $('#demo').html('');
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://koreanjson.com/users");
  xhttp.setRequestHeader("context-type", "application/json");
  xhttp.send();
  xhttp.onload = () => {
    if(xhttp.status == 200){
      let stu = JSON.parse(xhttp.response);
      index = stu.length;
      stu.forEach(element => {
        $('#demo').append('<div>' + element.id + " " + element.name + "<br>");
      });
      
    }
  }
}


function put(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/students");
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  const data = {id: `${index + 1}`, name: `${$('#name_i').val()}`, age: $('#age_i').val()};
  xhttp.send(JSON.stringify(data));
  xhttp.onload = () => {
    if (xhttp.status === 200) {
      console.log('성공');
    }
  }
}


function update(){
  $('#demo').html('');
  const id_i = $('#num_i').val();
  console.log($('#num_i').val());
  console.log($('#name_i').val());
  console.log($('#age_i').val());

  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/students/" + id_i);
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  const data = {name: `${$('#name_i').val()}`, age: $('#age_i').val()};
  xhttp.send(JSON.stringify(data));
  xhttp.onload = () => {
    if(xhttp.status == 200){
      get();
    }
  }
}
