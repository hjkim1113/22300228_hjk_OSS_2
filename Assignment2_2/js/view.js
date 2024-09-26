"use strict";

const ind = localStorage.getItem('data_index');
const det = JSON.parse(localStorage.getItem('detail'));

let values = ['email', 'phone', 'position', 'major', 'join_year'];

$('#name_v').html(`${det.name}님에 대한 정보`)

for(let i = 0; i < 5; i++){
  $(`#${values[i]}_v`).html(`${det[values[i]]}`);
}

if($('#descrip_v').html() == ""){
  $(`#descrip_v`).html(`상세 내용이 없습니다.`);
} else {
  $(`#descrip_v`).html(`${det.descrip}`);
}


function removeList(){
  if(confirm('게시물을 삭제할까요?')){

    const list = JSON.parse(localStorage.getItem('list_all'));

    list.splice(ind, 1);

    localStorage.setItem('list_all', JSON.stringify(list));

    alert(`${det.name}님의 정보가 삭제 되었습니다.`);
    window.localStorage.removeItem('data_index');
    window.localStorage.removeItem('detail');
    location.href = "/";
  }
}

function editList(){
  localStorage.setItem('data_index', ind);
  window.localStorage.removeItem('detail');
  location.href = "./edit.html";
}

function back(){
  window.localStorage.removeItem('data_index');
  window.localStorage.removeItem('detail');
  location.href = '/'
}