let i;
let x, y, z;
let p = 0;
let score;
let decay = 30;
let cursor;
let outline;
let sec;
let btns;
let btn1;
let scorez;
let d3fault;
let time;
let insegna = document.getElementById('insegna');
let size;


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
size.style.display = 'none';
btns.style.display = 'none';
btn1.style.display = 'none';
scorez.style.display = 'none';
insegna.style.display = 'none';

time = setInterval(() => {

pi.innerHTML = "decay: " + decay;
decay--;

if(decay == -1) {

clearInterval(time);
sec.style.display = 'block';
//btns.style.display = 'block';
//btn1.style.display = 'block';
scorez.style.display = 'block';
insegna.style.display = 'block';
pi.innerHTML = "Game Over";
i.remove();

}

}, 180);

}

let t1mer;
let s = 0;

function tim3r() { 

let sec = setInterval(() => {

t1mer = document.getElementById('sec');
t1mer.innerHTML = "seconds: " + s;
s++;

if(decay == -1) {

clearInterval(sec);

}

}, 1000);

}

let u = document.addEventListener('keydown', (event) => { 
            
if(event.key == 'h') {

this.sec.style.display = 'block';
scorez.style.display = 'block';
   
}

if(event.key == 'd') {

document.body.style.cursor = 'pointer';
            
}

if(event.key == 'c') {

document.body.style.cursor = "url(newBCircle.png), auto";
corner.style.cursor = "url(newBCircle.png), auto";
}

if(event.key == 'v') {

document.body.style.cursor = "url(BCircle.png), auto";
corner.style.cursor = "url(BCircle.png), auto";
}

if(event.key == 'k') {

target.style.background = "red";
target.style.border = "red";

document.body.style.cursor = "url(redBall.png), auto";
corner.style.cursor = "url(redBall.png), auto";

} if(event.key == 'r') {

window.location.reload();

}

if(event.key == 's' || event.key == ' ') {

        sec.style.display = 'none';
        size.style.display = 'none';
        btns.style.display = 'none';
        btn1.style.display = 'none';
        scorez.style.display = 'none';
        insegna.style.display = 'none';

        time = setInterval(() => {

        pi.innerHTML = "Decay: " + decay;
        decay--;
        
        if(decay == -1) {
        
        clearInterval(time);
        sec.style.display = 'block';
        //btns.style.display = 'block';
        //btn1.style.display = 'block';
        scorez.style.display = 'block';
        insegna.style.display = 'block';
        pi.innerHTML = "Game Over";
        i.remove();
        
        }
        
        }, 180);

        let t1mer;
        let s = 0;

        function tim3r() { 

        let sec = setInterval(() => {

        t1mer = document.getElementById('sec');
        t1mer.innerHTML = "seconds: " + s;
        s++;

        if(decay == -1) {

        clearInterval(sec);

    }

  }, 1000);

 }

tim3r();

    
}     
     
});


function point(Decay) {


Decay = decay++;

score = document.getElementById('score');
score.innerHTML = 'decay: ' + Decay;
Decay++;

}

cursor = document.getElementById('cursor');

let btn = document.getElementById('btn');
btn.addEventListener('click', setBackground);


function setBackground() {

if(document.body.style.background == "white") { 

document.body.style.background = "black";
document.body.style.color = "white";
document.html.style.cursor = 'url("whiteCircle.cur"), auto';
target.style.background = "white";
//cursor.style.background = "white";
barrier.style.background = "black";
insegna.style.color = "white";
//outline.style.background = "#000";

} else {
   
document.body.style.background = "white";
document.body.style.color = "black";
i.style.background = "black";
document.html.style.cursor = 'url("cyanCircle.cur"), auto';
target.style.background = "black";
barrier.style.background = "white";
insegna.style.color = "black";
//cursor.style.background = "#000";

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

size = document.getElementById('size');
size.addEventListener('click', function() {

if(target.style.height == '95px' &&  target.style.width == '95px') {

target.style.height = '75px';
target.style.width = '75px';
barrier.style.width = '80px';
barrier.style.height = '80px';    

} else {

target.style.height = '95px';
target.style.width = '95px';
barrier.style.width = '100px';
barrier.style.height = '100px';    

}
            
});

  
