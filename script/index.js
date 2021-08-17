const bgcolor = ["green","yellow","grey","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".code");

btn.addEventListener("click",function(){

    const randomNumber = getrandomno();
    document.body.style.backgroundColor = bgcolor[randomNumber];
    color.textContent = bgcolor[randomNumber];
})

function getrandomno(){
    return Math.floor(Math.random()*bgcolor.length);
}