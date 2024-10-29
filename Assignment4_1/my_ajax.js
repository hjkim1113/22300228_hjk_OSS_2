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
  xhttp.open("GET", "https://beamish-tiramisu-f9b18f.netlify.app/my_data.json");
  xhttp.setRequestHeader("context-type", "application/json");
  xhttp.send();
  xhttp.onload = () => {
    if(xhttp.status == 200){
      let stu = JSON.parse(xhttp.response);
      index = stu.length;
      stu.forEach(element => {
        $('#demo').append('<div>' + element.name + " " + element.email + "<br>");
      });
      
    }
  }
}

// {
//   "name":"문지훈",
//   "email":"jihunmoon@gmail.com",
//   "phone":"010-0123-4567",
//   "position":"AI전문가",
//   "major":"컴퓨터 공학",
//   "join_year":"2024",
//   "descrip":"문지훈은 2024년에 입사한 AI 전문가로, 딥러닝 및 머신러닝 알고리즘 연구에 기여하며, 회사의 AI 솔루션 개발에 큰 역할을 하고 있습니다."
// }


function put(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://beamish-tiramisu-f9b18f.netlify.app/my_data.json");
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
  xhttp.open("PUT", "https://beamish-tiramisu-f9b18f.netlify.app/my_data.json" + id_i);
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  const data = {name: `${$('#name_i').val()}`, age: $('#age_i').val()};
  xhttp.send(JSON.stringify(data));
  xhttp.onload = () => {
    if(xhttp.status == 200){
      get();
    }
  }
}
