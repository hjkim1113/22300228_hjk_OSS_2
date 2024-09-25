"use strict";

// console.log("안녕하세요");

// const iner = document.querySelector("#in");
// const fnum = document.querySelector("#fnum");
// const snum = document.querySelector("#snum");
// const reas = document.querySelector("#reas");

// const btn1 = document.querySelector(".b1");
// const btn2 = document.querySelector(".b2");

// btn1.addEventListener('click', () => {
//   if(iner.hasAttribute("style")){
//     iner.removeAttribute("style")
//   } else {
//     iner.setAttribute("style","display:none");
//   }
// });

// btn2.addEventListener('click', () => {
//   reas.value = Number(fnum.value) + Number(snum.value);
// });

const h1 = document.querySelector("#name");

console.log($('#name')[0].innerHTML);
console.log($('#name').html());
console.log(h1.innerHTML);

console.log(`안녕하세요 ${$('#name').html()} 입니다.`)