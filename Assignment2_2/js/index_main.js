"use strict";

let list;

fetch('./data.json')
.then(response => response.json())
.then(data => {

  list = data;

  $('#length_list').text(`총 ${data.length}개의 데이터`);
  
  $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>`));
  for(let i = 0; i < Math.ceil(data.length / 10); i++){
    $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" onclick="changePageNum(${i + 1})">${i + 1}</a></li>`));
  }
  $('#page_num').append($(`<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>`));

  showList(0);

})
.catch(error => {
    console.error('JSON 파일을 불러오는데 분제가 발생했습니다.', error);
});


function reset(){
  $('tbody').html('');
  showList(0);
}

function changePageNum(pnum){
  $('tbody').html('');
  showList(10 * (pnum - 1));
}

function showList(start_i){
  for(let i = 0; i < 10 && (start_i + i) < list.length; i++){
    $('tbody').append(
      `<tr onclick="movePage(${start_i + i})">
        <th scope="row">${start_i + i + 1}</th>
        <td>${list[start_i + i].name}</td>
        <td>${list[start_i + i].position}</td>
        <td>${list[start_i + i].email}</td>
        <td>${list[start_i + i].phone}</td>
        <td>${list[start_i + i].major}</td>
        <td>${list[start_i + i].join_year}</td>
      </tr>`
    );
  }
}

function movePage(data_index){
  localStorage.setItem('data_index', data_index);
  localStorage.setItem('detail', JSON.stringify(list[data_index]));
  location.href = "./Assignment2_2/view.html";
}


function searchShowList(){
  const select_value = $('select option:selected').val();
  const serch_value = $('#serch_v').val();
  if(!serch_value) return alert('찾을 내용을 입력해 주세요.');
  if((serch_value.length < 2) && !(select_value == 'name')) return alert('2글자 이상 입력해 주세요');
  
  $('#serch_v').val("");
  $('tbody').html('');

  for(let i = 0; i < list.length; i++){
    if((list[i][select_value]).match(serch_value)){
      $('tbody').append(
        `<tr onclick="movePage(${i})">
          <th scope="row">${i + 1}</th>
          <td>${list[i].name}</td>
          <td>${list[i].position}</td>
          <td>${list[i].email}</td>
          <td>${list[i].phone}</td>
          <td>${list[i].major}</td>
          <td>${list[i].join_year}</td>
        </tr>`
      );
    }
  }
}