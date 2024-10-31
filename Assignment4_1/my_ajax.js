let number = 0;
let selected_info;
let id_set = [];

active_check();
get();

function set_num(numb){
  number = numb;
  active_check();
}

function select_btn(row){
  selected_info = JSON.parse(row.getAttribute('data-element'));
  number = 1;
  active_check(selected_info);
  console.log(selected_info.id + " hi");
}

function active_check(element_info) {
  switch(number){
    case 0 :
      selected_info = {};
      $('#add_btn').css("display","inline");
      $('#delete_btn').css("display","none");
      $('#submit_btn').css("display","none");
      $('#change_title').text("데이터 추가하기");
      $('#add_page').addClass('active');
      $('#adit_page').removeClass('active');
      break;
    case 1 :
      $('#name_v').val(element_info.name);
      $('#email_v').val(element_info.email);
      $('#phone_v').val(element_info.phone);
      $('#position_v').val(element_info.position);

      $('#add_btn').css("display","none");
      $('#delete_btn').css("display","inline");
      $('#submit_btn').css("display","inline");
      $('#change_title').text("데이터 편집/삭제하기");
      $('#adit_page').addClass('active');
      $('#add_page').removeClass('active');
      break;
  }
}

function create_id(){
  let ret;
  while(true){
    ret = ret = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;
    if(id_set.indexOf(ret) == -1){
      id_set.push(ret);
      break;
    }
  }
  return ret;
}



function get(){
  let count = 1;
  $('tbody').html('');
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/people");
  xhttp.setRequestHeader("context-type", "application/json");
  xhttp.send();
  xhttp.onload = () => {
    if(xhttp.status == 200){
      if(number == 0){
        $('#name_v').val('');
        $('#email_v').val('');
        $('#phone_v').val('');
        $('#position_v').val('');
      }
      let stu = JSON.parse(xhttp.response);
      id_set = []
      stu.forEach(element => {
        $('tbody').append(
          `<tr data-element='${JSON.stringify(element)}' onclick="select_btn(this)">
            <th scope="row">${count}</th>
            <td>${element.name}</td>
            <td>${element.position}</td>
            <td class="email_hide">${element.email}</td>
            <td>${element.phone}</td>
          </tr>`
        );
        id_set.push(element.id);
        count++;
      });
      $('#total').text(`${stu.length}명`);
    }
  }
}

function put(){
  if(!validationCheck()){
    alert('정보를 다시 입력해 주세요.');
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/people");
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  const data = {id: `${create_id()}`, name: $('#name_v').val(), email: $('#email_v').val(), phone: $('#phone_v').val(), position: $('#position_v').val()};
  xhttp.send(JSON.stringify(data));
  xhttp.onload = () => {
    if (xhttp.status == 200) {
      alert('추가되었습니다.')
      get();
    }
  }
}


function update(){
  if(!validationCheck()){
    alert('정보를 다시 입력해 주세요.');
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/people/" + selected_info.id);
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  const data = {id: selected_info.id, name: $('#name_v').val(), email: $('#email_v').val(), phone: $('#phone_v').val(), position: $('#position_v').val()};
  xhttp.send(JSON.stringify(data));
  xhttp.onload = () => {
    if(xhttp.status == 200){
      alert('수정되었습니다.')
      get();
    }
  }
}

function delete_el(){
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/people/" + selected_info.id);
  xhttp.setRequestHeader("context-type", "application/json;chatset=UTF-8");
  xhttp.send();
  xhttp.onload = () => {
    if(xhttp.status == 200){
      alert('삭제되었습니다.')
      get();
    }
  }
}


function validationCheck(){
  let check = 0;

  // 이름
  if($('#name_v').val().length < 2){
    $('#name_v').toggleClass('is-invalid', true);
    $('#name_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#name_v').toggleClass('is-invalid', false);
    $('#name_v').toggleClass('is-valid', true);
  }

  // 이메일
  if(!$('#email_v').val().match('@') || !$('#email_v').val().match('.')){
    $('#email_v').toggleClass('is-invalid', true);
    $('#email_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#email_v').toggleClass('is-invalid', false);
    $('#email_v').toggleClass('is-valid', true);
  }

  // 전화번호
  if(!(/^(070|02|0[0-9][0-9])-\d{3,4}-\d{4}$/.test($('#phone_v').val()))){
    $('#phone_v').toggleClass('is-invalid', true);
    $('#phone_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#phone_v').toggleClass('is-invalid', false);
    $('#phone_v').toggleClass('is-valid', true);
  }

  // 분야
  if(!$('#position_v').val()){
    $('#position_v').toggleClass('is-invalid', true);
    $('#position_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#position_v').toggleClass('is-invalid', false);
    $('#position_v').toggleClass('is-valid', true);
  }

  if(check == 0) return true;
  return false;
}
