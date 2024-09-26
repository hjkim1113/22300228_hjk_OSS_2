"use strict";

const ind = localStorage.getItem('data_index');

const list = JSON.parse(localStorage.getItem('list_all'));

$('#new').html(`${list[ind].name}님의 정보 수정`);

$('#name_v').val(list[ind].name);
$('#email_v').val(list[ind].email);
$('#phone_v').val(list[ind].phone);
$('#position_v').val(list[ind].position);
$('#major_v').val(list[ind].major);
$('#join_year_v').val(list[ind].join_year);
$('#descrip_v').val(list[ind].descrip);

function confirm_btn(){

  if(!validationCheck()){
    alert('정보를 다시 입력해 주세요.');
    $('form').on('submit', function(event){
      event.preventDefault();
    })
    return false;
  }

  console.log('hi')

  if(confirm('게시물을 수정할까요?')){
    const add_det = {
      "name":$('#name_v').val(),
      "email":$('#email_v').val(),
      "phone":$('#phone_v').val(),
      "position":$('#position_v').val(),
      "major":$('#major_v').val(),
      "join_year":$('#join_year_v').val(),
      "descrip":$('#descrip_v').val()
    };

    list[ind] = add_det;

    localStorage.setItem('list_all', JSON.stringify(list));

    alert('게시물이 수정됩니다.');
  } else {
    $('form').on('submit', function(event){
      event.preventDefault();
    })
    return false;
  }
  location.href = "/";
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

  // 전공
  if(!$('#major_v').val()){
    $('#major_v').toggleClass('is-invalid', true);
    $('#major_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#major_v').toggleClass('is-invalid', false);
    $('#major_v').toggleClass('is-valid', true);
  }

  // 입사년도
  if(!$('#join_year_v').val() || !(/^\d{4}$/.test($('#join_year_v').val()))){
    $('#join_year_v').toggleClass('is-invalid', true);
    $('#join_year_v').toggleClass('is-valid', false);
    check++;
  } else {
    $('#join_year_v').toggleClass('is-invalid', false);
    $('#join_year_v').toggleClass('is-valid', true);
  }

  if(check == 0) return true;
  return false;
}