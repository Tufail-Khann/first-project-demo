let button= document.querySelector(".btnA");
let button1= document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");

button.addEventListener("click", ()=>{
    popup.classList.add("open-popup");
});

button1.addEventListener("click", ()=>{
    popup.classList.remove("open-popup");
});

button2.addEventListener("click", ()=>{
    popup.classList.remove("open-popup");
});





