"use strict";

console.log("안녕하세요");

const add = document.querySelector(".add");
const del = document.querySelector(".del");
const input = document.querySelector("#inte");
const ul = document.querySelector("#ul");
var all = [];

add.addEventListener('click', () => {
  if(!input.value) return;
  const leng = all.length;
  var words = input.value.split(',');
  for(let i = 0; i < words.length; i++){
    if(all.indexOf(words[i].trim()) >= 0){
      alert(`${words[i].trim()}은(는) 이미 포함되어있습니다.`);
      continue;
    }
    all[leng + i] = words[i].trim();
    const li = document.createElement("li");
    li.innerText = words[i].trim();
    ul.appendChild(li);
  }
  input.value = '';
});

del.addEventListener('click', () => {
  all.length = 0;
  ul.innerHTML = '';
});