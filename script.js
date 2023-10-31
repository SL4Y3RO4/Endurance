let i;
let x, y, z;
let p = 0;
let score;
let decay = 30;
let text_gameover;
let cursor;
let outline;
let sec;
let btns;
let btn1;
let scorez;
let d3fault;
let time;


i = document.getElementById('barrier');
i.addEventListener("mouseover", tp_target);

function tp_target() {

x = (Math.random() * 500) + 1;
y = (Math.random() * 500) + 1;
z = (Math.random() * 500) + 1;

i.style.left = x + "px";
i.style.top = y + "px";
i.style.right = z + "px";

}

let pi = document.getElementById('score');


sec = document.getElementById('sec');
btns = document.getElementById('btns');
btn1 = document.getElementById('btn');
scorez = document.getElementById('score');

function start() { 

sec.style.display = 'none';
btns.style.display = 'none';
btn1.style.display = 'none';
scorez.style.display = 'none';

time = setInterval(() => {

pi.innerHTML = "score: " + decay;
decay--;

if(decay == -0) {

clearInterval(time);
sec.style.display = 'block';
//btns.style.display = 'block';
//btn1.style.display = 'block';
scorez.style.display = 'block';
text_gameover = document.getElementById("text_gameover");
text_gameover.innerHTML = "Game Over";
i.remove();

}

}, 175);

}

let t1mer;
let s = 0;

function tim3r() { 

let sec = setInterval(() => {

t1mer = document.getElementById('sec');
t1mer.innerHTML = "seconds: " + s;
s++;

if(decay == -0) {

clearInterval(sec);

}

}, 1000);

}

let u = document.addEventListener('keydown', (event) => { 
            
if(event.key == 'r') {

let i = document.getElementById('target');

x = (Math.random() * 255) + 1;
y = (Math.random() * 255) + 1;
z = (Math.random() * 255) + 1;

i.style.left = x + "px";    
i.style.top = y + "px";  
i.style.right = z + "px";  

}



if(event.key == 's') {

clearInterval(this.sec);
clearInterval(this.time);
this.sec.style.display = 'block';
scorez.style.display = 'block';
text_gameover = document.getElementById("text_gameover");
text_gameover.innerHTML = "Game Over";
i.remove();
   
}
       
});

function point(Decay) {


Decay = decay++;

score = document.getElementById('score');
score.innerHTML = 'score: ' + Decay;
Decay++;

}

cursor = document.getElementById('cursor');

let btn = document.getElementById('btn');
btn.addEventListener('click', setBackground);


function setBackground() {

if(document.body.style.background = "#fff") { 

document.body.style.background = "#000";
document.body.style.color = "#fff";
target.style.background = "#fff";
cursor.style.background = "#fff";
barrier.style.background = "#000";
//outline.style.background = "#000";

} else {
   
document.body.style.background = "#fff";
document.body.style.color = "#000";
i.style.background = "#000";
cursor.style.background = "#000";

}

}

/* let g = document.querySelector('*');

function default1() {

if(g.style.cursor == 'pointer') {
   
g.style.cursor = 'none';
cursor.remove();

}

}
*/
   
function sound() {

let sound = document.getElementById('sound');
sound.play();

}

/*
outline = document.getElementById('outline');
document.addEventListener('mousemove', cursore);

function cursore(e) {

let y3 = e.clientY;
let x3 = e.clientX;

outline.style.left = x3 + "px";
outline.style.top = y3 + "px";

}
*/

  
