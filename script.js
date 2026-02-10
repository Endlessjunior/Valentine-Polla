/* ===== ตั้งรหัสตรงนี้ ===== */
const correctPassword="Polla0709";

/* ===== เปิดซอง ===== */
function openEnvelope(){
let env=document.getElementById("envelope");
env.classList.add("open");

setTimeout(()=>{
document.getElementById("introScreen").style.display="none";
document.getElementById("passwordScreen").classList.remove("hidden");
},900);
}

/* ===== ตรวจรหัส ===== */
function checkPassword(){

let input=document.getElementById("passwordInput").value;
let bunny=document.getElementById("bunnyGuard");

if(input===correctPassword){

document.body.classList.add("successFlash");

createHeartBurst();

setTimeout(()=>{
document.getElementById("passwordScreen").style.display="none";
document.getElementById("mainSite").classList.remove("hidden");
},800);

}else{

document.getElementById("errorText").innerText="❌ รหัสผิดนะ 🐰 ลองอีกทีสิ";
bunny.classList.add("shake");
setTimeout(()=>bunny.classList.remove("shake"),400);

}

}

/* ===== หัวใจระเบิด ===== */
function createHeartBurst(){
for(let i=0;i<20;i++){
let h=document.createElement("div");
h.innerHTML="💖";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.top=Math.random()*100+"vh";
h.style.fontSize="30px";
h.style.zIndex="9999";
document.body.appendChild(h);

setTimeout(()=>h.remove(),1000);
}
}
const story=[
"ตั้งแต่เจอคุณ 🐰 โลกน้องเปลี่ยนไปเลย",
"ทุกวันมันสดใสขึ้นแบบแปลกๆ",
"น้องเลยอยากถามว่า..."
];
let i=0;

function nextStory(){
if(i<story.length){
document.getElementById("dialogue").innerText=story[i];
i++;
}else{
document.getElementById("finalChoice").classList.remove("hidden");
}
}

document.getElementById("noBtn").addEventListener("mouseover",()=>{
noBtn.style.transform=`translate(${Math.random()*200}px,${Math.random()*100}px)`
})

function accept(){
alert("คุณตอบตกลงแล้ว 🐰💖")
}
function love(){
document.getElementById("result").innerHTML="🐰💖 เราเป็นแฟนกันแล้ววว 🦊"
}
function yes(){
msg.innerHTML="💖 คุณตอบตกลงแล้ว 🐰";
}

setInterval(()=>{
let s=document.createElement("div");
s.className="star";
s.innerHTML="✨";
s.style.left=Math.random()*100+"vw";
document.body.appendChild(s);
setTimeout(()=>s.remove(),3000);
},300);
function ok(){
alert("🐰💖 แฟนกันแล้วววว")
}
setTimeout(()=>{
intro.style.display="none";
main.classList.remove("hidden");
},2000);

function boom(){
for(let i=0;i<20;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="💖";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),2000);
}
}
setInterval(()=>{
const flower=document.createElement("div");
flower.className="flower";

const flowers=["🌸","🌹"];
flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"vw";
flower.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),6000);
},400);
for(let i=0;i<6;i++){
let b=document.createElement("div");
b.className="bubble";
b.style.left=Math.random()*100+"vw";
b.style.top=Math.random()*100+"vh";
document.body.appendChild(b);
}
