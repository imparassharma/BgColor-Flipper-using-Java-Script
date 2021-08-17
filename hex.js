const bgcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".code");

btn.addEventListener("click",function(){
    
    let hexcolor = "#";
    for (let i=0;i<6;i++){
        hexcolor+=bgcolor[ getrandomno()]   
    }
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;

})

function getrandomno(){
    return Math.floor(Math.random()*bgcolor.length);
}