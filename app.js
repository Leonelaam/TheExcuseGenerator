/*let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];*/

let who = ['The dog','My granma','his turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


let generators = document.getElementById("generators");
    generators.addEventListener("click", function(){
    let excuse = "";

    excuse += who[generateRandom(who.length-1, 0)] + " ";
    excuse += action[generateRandom(action.length-1, 0)] + " ";
    excuse += what[generateRandom(what.length-1, 0)] + " ";
    excuse += when[generateRandom(when.length-1, 0)];
    let p = document.getElementById("excuse");
    p.innerHTML = excuse;
})


function generateRandom(max, min){
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}
