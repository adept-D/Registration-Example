'use strict'


const reg = document.getElementById("reg");
const btn = document.getElementById("btn");
const sendBtn = document.getElementById("sendBtn");
const main = document.getElementById("content");
//const body = document.getElementsByClassName(body);


btn.addEventListener('click',function(e){
        reg.style.display = 'block';
        main.classList.add("blur");
        e.preventDefault();
        e.stopPropagation();
        
        
      //  btn.style.display = 'none';
})

const login = document.getElementById("login");
const password = document.getElementById("password");

sendBtn.addEventListener('click',function(){
    sendBtn.style.backgroundColor = 'blue';
    sendBtn.style.border = 'none';
    sendBtn.style.color = 'black';
    reg.style.display = 'none';
    main.classList.remove("blur");
   // password.value = ''
  //  login.value = ''

    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            login.style.display = 'none';
        }
        login.style.opacity = op;
        login.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);

    
})