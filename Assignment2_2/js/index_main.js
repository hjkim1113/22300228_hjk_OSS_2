"use strict";

let list;

if((localStorage.getItem('list_all') == undefined)){
  fetch('/data.json')
  .then(response => response.json())
  .then(data => {

    list = data;

    set();
    showList(0);

    localStorage.setItem('list_all', JSON.stringify(list));

  })
  .catch(error => {
      console.error('JSON 파일을 불러오는데 문제가 발생했습니다.', error);
  });

} else {
  list = JSON.parse(localStorage.getItem('list_all'));
  set();
  showList(0);
}

function set(){
  $('#length_list').text(`총 ${list.length}개의 데이터`);
  $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`));
  for(let i = 0; i < Math.ceil(list.length / 10); i++){
    $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" onclick="changePageNum(${i + 1})">${i + 1}</a></li>`));
  }
  $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>`));
}

function showList(start_i){
  for(let i = 0; i < 10 && (start_i + i) < list.length; i++){
    append_ac(start_i + i);
  }
}

function searchShowList(){
  const select_value = $('select option:selected').val();
  const serch_value = $('#serch_v').val();
  if(!serch_value) return alert('찾을 내용을 입력해 주세요.');
  if((serch_value.length < 2) && !(select_value == 'name')) return alert('2글자 이상 입력해 주세요');
  
  $('tbody').html('');

  for(let i = 0; i < list.length; i++){
    if((list[i][select_value]).match(serch_value)){
      append_ac(i);
    }
  }
}

function append_ac(index_num){
  $('tbody').append(
    `<tr onclick="movePage(${index_num})">
      <th scope="row">${index_num + 1}</th>
      <td>${list[index_num].name}</td>
      <td>${list[index_num].position}</td>
      <td class="email_hide">${list[index_num].email}</td>
      <td>${list[index_num].phone}</td>
      <td class="major_hide">${list[index_num].major}</td>
      <td class="year_hide">${list[index_num].join_year}</td>
    </tr>`
  );
}



function reset(){
  $('tbody').html('');
  showList(0);
}

function changePageNum(pnum){
  $('tbody').html('');
  showList(10 * (pnum - 1));
}

function movePage(data_index){
  localStorage.setItem('data_index', data_index);
  localStorage.setItem('detail', JSON.stringify(list[data_index]));
  location.href = "./Assignment2_2/view.html";
}

function resetData(){
  window.localStorage.clear();
  location.href = "/";
}