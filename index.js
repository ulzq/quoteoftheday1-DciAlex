var question = ["11","222","3333","444","555","666"];

function rnd (){
    
    let rand = question[Math.floor(Math.random() * question.length)];
    let p = document.querySelector("#quiz");

     p.innerText = rand;
}