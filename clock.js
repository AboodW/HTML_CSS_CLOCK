const hours = document.createElement('span');
const doubledots1 = document.createElement('span');
const minutes = document.createElement('span');
const doubledots2 = document.createElement('span');
const seconds = document.createElement('span');
const doubledots3 = document.createElement('span');
const PAM = document.createElement('span');



document.body.appendChild(hours);
document.body.appendChild(doubledots1);
document.body.appendChild(minutes);
document.body.appendChild(doubledots2);
document.body.appendChild(seconds);
document.body.appendChild(doubledots3);
document.body.appendChild(PAM);


cssProperties(document.body, {
	"margin": "auto",
   "position": "absolute",
   "background-color":"#ffa23f",
   "top": "50%",
   "left": "50%",
   "transform":"translate(-50%, -50%)",
   "font-size":"4em",
   "color":"#1C34A6"
});

function updateTime() {
   const date = new Date();
   const h = date.getHours();
   const m = date.getMinutes();
   const s = date.getSeconds();
   hours.innerText = h < 10 ? `0${h}` : h;
   doubledots1.innerText = ":";
   minutes.innerText = m < 10 ? `0${m}` : m;
   doubledots2.innerText = ":";
   seconds.innerText = s < 10 ? `0${s}` : s;
   doubledots3.innerText = " ";
   PAM.innerText = h > 12? "PM" : "AM";
}

setInterval(updateTime,10);
   

function cssProperties(elem, attrs) {
	for (let key in attrs) {
		elem.style.setProperty(key, attrs[key]);
	}
}