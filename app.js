let main = document.querySelector(".main");
let button = document.getElementById("btn");
let heading = document.getElementById("color");
let n = 1;

function getColor(){
    let val1 = Math.floor(0+Math.random()*255);
    let val2 = Math.floor(0+Math.random()*255);
    let val3 = Math.floor(0+Math.random()*255);

    main.style.backgroundColor=`rgb(${val1},${val2},${val3})`
    heading.innerHTML=`rgb(${val1},${val2},${val3})`

    
}

button.addEventListener("click",getColor)