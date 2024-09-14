"use strict";

const cert_title = document.querySelector("#title");
const cert_detail = document.querySelector("#detail");
const arrow_down = document.querySelector("#arrow_down");
const eye_icon = document.querySelector("#eye");
const eye_icon_path = document.querySelector("#eyepa");
const mouse_sub_in = document.querySelector("#mouse_sub_in");
const mouse_sub_out = document.querySelector("#mouse_sub_out");
const psword = document.querySelector("#psword input");

var check_list = ['id', 'psword', 'name', 'born', 'phone', 'gender', 'cert'];
// var check_list = ['id_input', 'psword_input', 'name_input', 'born_input', 'phone_input', 'gender_input', 'cert_input'];


function show(){
  if(cert_title.hasAttribute("style")){
    cert_title.removeAttribute("style");
    cert_detail.removeAttribute("style");
    arrow_down.setAttribute("d","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z");
  } else {
    cert_title.setAttribute("style","border: 0;");
    cert_detail.setAttribute("style","display:none");
    arrow_down.setAttribute("d","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z");
  }
}



function showpw(){
  const det = psword.value;
  eye_icon.removeAttribute("viewBox");
  eye_icon_path.removeAttribute("d");
  if(psword.type == "text"){
    psword.setAttribute("type","password");
    eye_icon.setAttribute("viewBox","0 0 640 512");
    eye_icon_path.setAttribute("d","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z");
  } else {
    psword.setAttribute("type","text");
    eye_icon.setAttribute("viewBox","0 0 576 512");
    eye_icon_path.setAttribute("d","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z");
  }
  psword.value = det;
}



function eye_hover(){
  eye_icon.setAttribute("style","fill: rgb(33, 151, 17); width: 20px;");
}

function eye_hover_out(){
  eye_icon.removeAttribute("style");
}



function mouse_in(){
  if(!mouse_sub_out.hasAttribute("style")){
    mouse_sub_out.setAttribute("style","display:none");
  }
  mouse_sub_in.removeAttribute("style");
}

function mouse_out(){
  mouse_sub_out.removeAttribute("style");
  mouse_sub_in.setAttribute("style","display:none");
}

function submitf(event){
  let count = 0;
  for(let i = 0; i < 5; i++){
    if(!document.querySelector(`#${check_list[i]}_input`).value){
      document.querySelector(`#${check_list[i]}`).setAttribute("style","border: 2px solid rgb(245, 50, 47); width: calc(100% - 2px);");
      document.querySelector(`#${check_list[i]}_li`).removeAttribute("style");
      count++;
    }
  }

  if(!document.querySelector(`#${check_list[6]}_input`).checked){
    document.querySelector(`#${check_list[6]}`).setAttribute("style","border: 2px solid rgb(245, 50, 47); width: calc(100% - 2px);");
    document.querySelector(`#${check_list[6]}_li`).removeAttribute("style");
    count++
  }

  if(!document.querySelector("#gender_input1").checked && !document.querySelector("#gender_input2").checked){
    document.querySelector(`#${check_list[5]}`).setAttribute("style","border: 0.8px solid rgb(245, 50, 47);");
    document.querySelector(`#rad`).setAttribute("style","border: 2px solid rgb(245, 50, 47);");
    document.querySelector(`#${check_list[5]}_li`).removeAttribute("style");
    count++;
  }
  
  if(count != 0) {
    event.preventDefault();
    return;
  }


  const isConfirmed = confirm('제출하시겠습니까?');
  if (!isConfirmed) {
    event.preventDefault();
  }
}


function check(value, idv){
  const list = idv.split('_');
  console.log(list)
  if(!value){
    document.querySelector(`#${list[0]}`).setAttribute("style","border: 2px solid rgb(245, 50, 47); width: calc(100% - 2px);");
    document.querySelector(`#${list[0]}_li`).removeAttribute("style");
    return false;
  } else if (list[0] == 'gender' && (!document.querySelector("#gender_input1").checked && !document.querySelector("#gender_input2").checked)) {
    document.querySelector(`#${check_list[5]}`).setAttribute("style","border: 0.8px solid rgb(245, 50, 47);");
    document.querySelector(`#rad`).setAttribute("style","border: 2px solid rgb(245, 50, 47);");
    document.querySelector(`#${check_list[5]}_li`).removeAttribute("style");
    return false;
  }

  if(list[0] == 'gender'){
    document.querySelector(`#rad`).removeAttribute("style");
    document.querySelector(`#${check_list[5]}`).removeAttribute("style");
    document.querySelector(`#${check_list[5]}_li`).setAttribute("style","display:none;");
    return true;
  }

  document.querySelector(`#${list[0]}`).removeAttribute("style");
  document.querySelector(`#${list[0]}_li`).setAttribute("style","display:none");
  return true;
}