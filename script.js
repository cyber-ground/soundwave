'use strict';


// ------------------------------------------------------------------------------------------
//                                 ----- SOUND WAVE -----
// ------------------------------------------------------------------------------------------


	// 		const total = document.getElementById('time-total');
	// 	const current = document.getElementById('time-current');
	// const remaining = document.getElementById('time-remaining');

	// 	const clr = '#0cf';
	// const musicSrc = 'img/Good Day (Wake Up).mp3';
	// var waveSurfer = WaveSurfer.create({
	// 	container: '#waveform',
	// 	waveColor: '#ddd',
	// 	// progressColor: '#ff006c',
	// 	progressColor: clr,
	// 	barWidth: 1,
	// 	responsive: true,
	// 	height: 90,
	// 	barRadius: 0,
	// });
	// waveSurfer.load(musicSrc);

  // const playBtn = document.querySelector('.playBtn');
	// playBtn.style.setProperty('--clr', clr);
	// playBtn.addEventListener('click', () => {
	// 	waveSurfer.playPause();
	// 	playBtn.classList.toggle('active');
	// });

	// waveSurfer.on('finish', function () {
	// 	playBtn.classList.remove('active');
	// 	waveSurfer.stop();
	// 	current.innerText = '0.00';
	// });

	// waveSurfer.on('audioprocess', function() {
	// 	if (waveSurfer.isPlaying()) {
	// 		let totalTime = waveSurfer.getDuration();
	// 		let	currentTime = waveSurfer.getCurrentTime();
	// 		let	remainingTime = totalTime - currentTime;
	// 		current.innerText = currentTime.toFixed(1);
	// 		// total.innerText = totalTime.toFixed(1);
	// 		// remaining.innerText = remainingTime.toFixed(1);
	// 	}
	// });

	// let audio = new Audio(); 
  // audio.src = musicSrc; 
	// audio.addEventListener('loadedmetadata',function() {
	// 	total.innerText = audio.duration.toFixed(1);
	// 	// console.log(audio.duration.toFixed(1)); // 総時間の取得
	// });


// ----------------------------------------------------------------
// if(playBtn.src.includes('play.png')) {
// 	playBtn.src = 'img/pause.png';
// } else {
// 	playBtn.src = 'img/play.png';
// }
// html: <img src="img/play.png" alt="" class="playBtn">
// ----------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// * added random music select ---


// const music = ['Good Day (Wake Up)','Crimson Fly','White River','Subah Subah'];
// 			const total = document.getElementById('time-total');
// 		const current = document.getElementById('time-current');
// 	const remaining = document.getElementById('time-remaining');
// let index = 0;
// 	let musicSrc = music[index];
// 	const clr = '#0cf';
// 	var waveSurfer = WaveSurfer.create({
// 		container: '#waveform',
// 		waveColor: '#ddd',
// 		// progressColor: '#ff006c',
// 		progressColor: clr,
// 		barWidth: 1,
// 		responsive: true,
// 		height: 90,
// 		barRadius: 0,
// 	});
// 	waveSurfer.load(`img/${musicSrc}.mp3`);

// 	const title = document.querySelector('h1');
//   title.innerText = musicSrc; // タイトルの自動化

//   const playBtn = document.querySelector('.playBtn');
// 	playBtn.style.setProperty('--clr', clr);
// 	playBtn.addEventListener('click', () => {
// 		waveSurfer.playPause();
// 		playBtn.classList.toggle('active');
// 	});

// 	waveSurfer.on('finish', function () {
// 		playBtn.classList.remove('active');
// 		waveSurfer.stop();
// 		current.innerText = '0.00';
// 		index++;
// 		if(index === music.length) {index = 0}
// 		musicSrc = music[index];
// 		title.innerText = musicSrc; // タイトルの自動化
// 		waveSurfer.load(`img/${musicSrc}.mp3`);
// 		audio.src = `img/${musicSrc}.mp3`; 
// 		setTimeout(() => {
// 			waveSurfer.play();
// 			playBtn.classList.add('active');
// 		}, 1000);
// 	});

// 	waveSurfer.on('audioprocess', function () {
// 		if (waveSurfer.isPlaying()) {
// 			let totalTime = waveSurfer.getDuration();
// 			let	currentTime = waveSurfer.getCurrentTime();
// 			let	remainingTime = totalTime - currentTime;
// 			current.innerText = currentTime.toFixed(1);
// 			// total.innerText = totalTime.toFixed(1);
// 			// remaining.innerText = remainingTime.toFixed(1);
// 		}
// 	});

	// let audio = new Audio(); 
  // audio.src = `img/${musicSrc}.mp3`; 
	// audio.addEventListener('loadedmetadata',function() {
	// 	total.innerText = audio.duration.toFixed(1);
	// 	// console.log(audio.duration.toFixed(1)); // 総時間の取得
	// });



// ------------------------------------------------------------------------------------------
// *                            ----- SOUND WAVE 1. -----
// ------------------------------------------------------------------------------------------


// 	const colors = ['#ff5500','#7700ff','#00ccff','#ff006c'];
// 	// const music = ['Good Day (Wake Up)','Crimson Fly','White River','Subah Subah'];
// 		const total = document.getElementById('time-total');
// 	const current = document.getElementById('time-current');
// 		let index = 0;
// 			let clr = colors[index];
// 	let musicSrc = music[index];

// 	var waveSurfer = WaveSurfer.create({
// 		container: '#waveform',
// 		waveColor: '#ddd',
// 		progressColor: clr,
// 		barWidth: 1,
// 		responsive: true,
// 		height: 90,
// 		barRadius: 0,
// 	});
// 	waveSurfer.load(`img/${musicSrc}.mp3`);

// 	const title = document.querySelector('h1');
//   title.innerText = musicSrc; // タイトルの自動化
//   const playBtn = document.querySelector('.playBtn');
// 		playBtn.style.setProperty('--clr', clr);
// 			playBtn.addEventListener('click', () => {
// 				waveSurfer.playPause();
// 				playBtn.classList.toggle('active');
// 			});

// 	waveSurfer.on('finish', repeat);
// 	function repeat() {
// 		playBtn.classList.remove('active');
// 		waveSurfer.stop();
// 		current.innerText = '0 : 00';
// 		index++;
// 		if(index === music.length) {index = 0}
// 		musicSrc = music[index];
// 		clr = colors[index];
// 		playBtn.style.setProperty('--clr', clr);
//     const progress = document.querySelector('.progress');
//     progress.remove();
// 		const track = document.querySelector('.track');
// 		let newElem = document.createElement('div');
//     newElem.classList.add('progress');
// 		newElem.setAttribute('id', 'waveform');
// 		track.appendChild(newElem);
// 		waveSurfer = WaveSurfer.create({
// 			container: '#waveform',
// 			waveColor: '#ddd',
// 			progressColor: clr,
// 			barWidth: 1,
// 			responsive: true,
// 			height: 90,
// 			barRadius: 0,
// 		})
// 		timeCounter();
// 		title.innerText = musicSrc; // タイトルの自動化
// 		waveSurfer.load(`img/${musicSrc}.mp3`);
// 		audio.src = `img/${musicSrc}.mp3`; 
// 		setTimeout(() => {
// 			waveSurfer.play();
// 			waveSurfer.on('finish', repeat);
// 			playBtn.classList.add('active');
// 		}, 1000);
// 	};

// function timeCounter() {
// 	waveSurfer.on('audioprocess', function () {
// 		if (waveSurfer.isPlaying()) {
// 			let	currentTime = waveSurfer.getCurrentTime();
// 			let currentMin = Math.floor(currentTime / 60);
// 			let currentSec = Math.floor(currentTime);
// 			let remainSec = Math.floor(currentTime % 60);
// 			current.innerText = String(currentMin).padStart(1,'0') 
// 			+ ' : ' + String(currentSec).padStart(2,'0');
// 			if(currentTime > 60) {
// 				current.innerText = currentMin + ' : ' + String(remainSec).padStart(2,'0');
// 			}
// 		}
// 	});
// } timeCounter();

// 	let audio = new Audio(); 
//   audio.src = `img/${musicSrc}.mp3`; 
// 	audio.addEventListener('loadedmetadata',function() {
// 		total.innerText = Math.floor(audio.duration / 60) 
// 		+ ' : ' + audio.duration.toFixed(0) % 60;
// 	});

		// console.log(audio.duration.toFixed(1)); // 総時間の取得
		// console.log(Math.floor(audio.duration / 60)); // 総時間の分だけ取得
		// console.log(audio.duration.toFixed(0) % 60); // 総時間を分で割った余りを取得
// ------------------------------------------------------------------------------------------
// // * before refactor ---
// function timeCounter__beforeRefactor() {
// 	waveSurfer.on('audioprocess', function () {
// 		if (waveSurfer.isPlaying()) {
// 			let	currentTime = waveSurfer.getCurrentTime();
// 				current.innerText = String(Math.floor(currentTime / 60)).padStart(1,'0') 
// 				+ ':' + String(Math.floor(currentTime)).padStart(2,'0');
// 			if(currentTime > 60) {
// 				current.innerText = Math.floor(currentTime / 60) 
// 				+ ':' + String(Math.floor(currentTime % 60)).padStart(2,'0');
// 			}
// 		}
// 	});
// }
// ------------------------------------------------------------------------------------------




// ------------------------------------------------------------------------------------------
// *                   ----- *** SOUND WAVE COMPLETED VERSION *** -----
// ------------------------------------------------------------------------------------------


const music = [
	'Fool',
	'Pokemon in NYC',
	"Momma I've Got A Feeling",
	'Catch It',
	'Salted Caramel',
	'Almost Winter',
	'Magic Lamp',
	'Im So',
	'Let Go',
	'No ID',
	'Supernova',
	'Sweet Tomorrow',
	'Drowning World',
	'Losing',
	"Don't Fuck This Up",
	'Ball Buster',
	'Nice Setup',
	'Cassette Love',
	'Cool J',
	'Barbara',
];

const total = document.getElementById('time-total');
const current = document.getElementById('time-current');
let index = 0;
let musicSrc = music[index];
let clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
const docElem = document.documentElement;
	docElem.style.setProperty('--clr', clr);
	pEvtDecl('none'); // init setting

var waveSurfer = WaveSurfer.create({
	container: '#waveform',
	waveColor: 'rgba(0, 0, 0, 0.5)',
	progressColor: clr,
	barWidth: 1,
	responsive: true,
	height: 90,
	barRadius: 0,
});
waveSurfer.load(`img/${musicSrc}.mp3`);

const volume = document.querySelector('.volume');
const title = document.querySelector('h1');
title.innerText = musicSrc; // タイトルの自動化
const playBtn = document.querySelector('.playBtn');
	playBtn.style.setProperty('--clr', clr);
playBtn.addEventListener('click', () => {
	waveSurfer.playPause();
	playBtn.classList.toggle('active');
	volume.classList.toggle('active');
	if(playBtn.classList.contains('active')) {
		pEvtDecl('block');
	} else { pEvtDecl('none') }
});

waveSurfer.on('finish', repeat);
function repeat() {
	playBtn.classList.remove('active');
	waveSurfer.stop();
	current.innerText = '0 : 00';
	index++;
	if(index === music.length) {index = 0}
	musicSrc = music[index];
	if(musicSrc === music[2]) {title.style.fontSize = 1.5 + 'em'} 
	else {title.style.fontSize = 1.8 + 'em'}
	clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
	docElem.style.setProperty('--clr', clr);
	playBtn.style.setProperty('--clr', clr);
	const waveForm = document.querySelector('.waveForm');
	waveForm.remove();
	const track = document.querySelector('.track');
	let newElem = document.createElement('div');
	newElem.classList.add('waveForm');
	newElem.setAttribute('id', 'waveform');
	track.appendChild(newElem);
	waveSurfer = WaveSurfer.create({
		container: '#waveform',
		waveColor: 'rgba(0, 0, 0, 0.5)',
		progressColor: clr,
		barWidth: 1,
		responsive: true,
		height: 90,
		barRadius: 0,
	})
	timeCounter();
	title.innerText = musicSrc; // タイトルの自動化
	waveSurfer.load(`img/${musicSrc}.mp3`);
	audio.src = `img/${musicSrc}.mp3`; 
	waveSurfer.on('ready', () => {
		waveSurfer.play();
		playBtn.classList.add('active');
		waveSurfer.on('finish', repeat);
		const userAgent = window.navigator.userAgent.toLowerCase();
		if(userAgent.indexOf("safari") !== -1) {
			waveSurfer.pause();
			playBtn.classList.remove('active');
			pEvtDecl('none');
		} 
		if(userAgent.indexOf("chrome") !== -1 || userAgent.indexOf("crios") !== -1) {
			waveSurfer.play();
			playBtn.classList.add('active');
			waveSurfer.on('finish', repeat);
			pEvtDecl('block');
		}
	});
}

function timeCounter() {
waveSurfer.on('audioprocess', () => {
	if (waveSurfer.isPlaying()) {
		let	currentTime = waveSurfer.getCurrentTime();
		let currentMin = Math.floor(currentTime / 60);
		let currentSec = Math.floor(currentTime);
		let remainSec = Math.floor(currentTime % 60);
		current.innerText = String(currentMin).padStart(1,'0') 
		+ ' : ' + String(currentSec).padStart(2,'0');
		if(currentTime > 60) {
			current.innerText = currentMin + ' : ' + String(remainSec).padStart(2,'0');
		}
	}
});
} timeCounter();

let audio = new Audio(); 
function getLoadedmetadata() {
	audio.src = `img/${musicSrc}.mp3`; 
	audio.addEventListener('loadedmetadata', () => {
		total.innerText = Math.floor(audio.duration / 60) 
		+ ' : ' + String(audio.duration.toFixed(0) % 60).padStart(2,'0');
	}); 
} getLoadedmetadata();

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
	btn.addEventListener('click', () => {
		btns.forEach(btz => {
			btz.style.setProperty('--pEvt', 'none');
			setTimeout(() => {
				btz.style.setProperty('--pEvt', 'initial');
			}, 1200);
		});
		if(btn.classList.contains('fwd') && index === 0) return;
		if(btn.classList.contains('fwd')) {index--}
		if(btn.classList.contains('btn-forward')) {index--}
		volume.classList.add('active');
		repeat();
	});
});

function pEvtDecl(pEvt) {
	const waveForm = document.querySelector('.waveForm');
	waveForm.style.setProperty('--pEvt', pEvt);
}

VanillaTilt.init(document.querySelector(".data-tilt"), {
	max: 10,
	speed: 400,
	gyroscopeMinAngleX:     -5,    
	gyroscopeMaxAngleX:     5,
	// gyroscopeMinAngleY:     -5,    
	// gyroscopeMaxAngleY:     5,
});

//* draggable event -------------------------------

const handle = document.querySelector('.handle');
const box = document.querySelector('.box');
const rect = box.getBoundingClientRect();

handle.addEventListener('mouseenter', () => {
	handle.addEventListener('mousedown', () => {
		document.addEventListener('mousemove', draggable);
	});
	handle.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', draggable);
	});
});

function draggable(e) {
	box.style.left = e.clientX - rect.width / 2 + 'px';
	box.style.top = e.clientY - rect.height + 8 + 'px';
}

// window.addEventListener('resize', () => {
//   box.style.left = innerWidth / 2 - rect.width / 2 + 'px';
//   box.style.top = innerHeight / 2 - rect.height / 2 + 'px';
// });

// ------------------------------------------------------------------------------------------
// *                     ----- *** Navigator.UserAgent *** -----
// ------------------------------------------------------------------------------------------

// var ua = window.navigator.userAgent.toLowerCase();

// if(ua.indexOf("edge") !== -1 || ua.indexOf("edga") !== -1 || ua.indexOf("edgios") !== -1) {
//   console.log("Your are using「Microsoft Edge」!");
// } else if (ua.indexOf("opera") !== -1 || ua.indexOf("opr") !== -1) {
//   console.log("Your are using「Opera」!");
// } else if (ua.indexOf("samsungbrowser") !== -1) {
//   console.log("Your are using「Samsung Internet Browser」!");
// } else if (ua.indexOf("ucbrowser") !== -1) {
//   console.log("Your are using「UC Browser」!");
// } else if(ua.indexOf("chrome") !== -1 || ua.indexOf("crios") !== -1) {
//   console.log("Your are using「Google Chrome」!");
// } else if(ua.indexOf("firefox") !== -1 || ua.indexOf("fxios") !== -1) {
//   console.log("Your are using「Mozilla Firefox」!");
// } else if(ua.indexOf("safari") !== -1) {
// 	waveSurfer.playPause();
//   console.log("Your are using「Safari」!");
// } else if (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
//   console.log("Your are using「Internet Explorer」!");
// } else {
//   console.log("No clue at all !");
// }


// ------------------------------------------------------------------------------------------
// *                     ----- *** SOUND WAVE COUNTER VERSION *** -----
// ------------------------------------------------------------------------------------------


	// const music = [
	// 	'Floaters',
	// 	'Make Love Not War',
	// 	'Good Day (Wake Up)',
	// 	'Crimson Fly',
	// 	'White River',
	// 	'Subah Subah',
	// 	'Urban Lullaby'
	// ];

	// const music = [
	// 	'Fool',
	// 	'Pokemon in NYC',
	// 	'Almost Winter',
	// 	'Magic Lamp',
	// 	'Im So',
	// 	'Sweet Tomorrow',
	// 	'Drowning World',
	// ];

	// let [count, newMin, newSec] = [0, 0, 0];
	// let [timeoutId, activate] = [undefined, false];
	// 	const min = document.querySelector('.min');
	// 	const sec = document.querySelector('.sec');
	// const total = document.getElementById('time-total');
	// let index = 0;
	// 	let musicSrc = music[index];
	// let clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
	// const title = document.querySelector('h1');
	// 	title.innerText = musicSrc; // タイトルの自動化
	// const docElem = document.documentElement;
	// 	docElem.style.setProperty('--clr', clr);
	// 	pEvtDecl('none'); //*** 
		
	// var waveSurfer = WaveSurfer.create({
	// 	container: '#waveform',
	// 	waveColor: 'rgba(0, 0, 0, 0.5)',
	// 	progressColor: clr,
	// 	barWidth: 1,
	// 	responsive: true,
	// 	height: 90,
	// 	barRadius: 0,
	// });
	// waveSurfer.load(`img/${musicSrc}.mp3`);

	
  // const playBtn = document.querySelector('.playBtn');
	// 	playBtn.addEventListener('click', () => {
	// 		count = newSec;
	// 		waveSurfer.playPause();
	// 		playBtn.classList.toggle('active');
	// 		if(activate) {
	// 			clearTimeout(timeoutId);
	// 			activate = false;
	// 			newSec = sec.textContent;
	// 			// pEvtDecl('initial');
	// 			return;
	// 		}
	// 		countUp();
	// 		activate = true;
	// 		pEvtDecl('none');
	// 	});
	
	// waveSurfer.on('finish', repeat);
	// function repeat() {
	// 	playBtn.classList.remove('active');
	// 	waveSurfer.stop();
	// 	clearTimeout(timeoutId);
	// 	activate = false;
	// 	index++;
	// 	if(index === music.length) {index = 0}
	// 	if(index < 0) {index = music.length - 1}
	// 	musicSrc = music[index];
	// 	clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
	// 	docElem.style.setProperty('--clr', clr);
  //   const waveForm = document.querySelector('.waveForm');
  //   waveForm.remove();
	// 	const track = document.querySelector('.track');
	// 	let newElem = document.createElement('div');
  //   newElem.classList.add('waveForm');
	// 	newElem.setAttribute('id', 'waveform');
	// 	newElem.style.setProperty('--pEvt', 'none');
	// 	track.appendChild(newElem);
	// 	min.textContent = '0';
	// 	sec.textContent = '00';
	// 	title.innerText = musicSrc; // タイトルの自動化
	// 	waveSurfer = WaveSurfer.create({
	// 		container: '#waveform',
	// 		waveColor: 'rgba(0, 0, 0, 0.5)',
	// 		progressColor: clr,
	// 		barWidth: 1,
	// 		responsive: true,
	// 		height: 90,
	// 		barRadius: 0,
	// 	})
	// 	waveSurfer.load(`img/${musicSrc}.mp3`);
	// 	setTimeout(() => {
	// 		waveSurfer.play();
	// 		waveSurfer.on('finish', repeat);
	// 		playBtn.classList.add('active');
	// 		[count, newMin, newSec] = [0,0,0];
	// 		countUp();
	// 		calcWaveVal();
	// 		activate = true;
  //     getLoadedmetadata();
	// 	}, 1000); 
	// };
	
	// function getLoadedmetadata() {
	// 		const audio = new Audio(); 
	// 		audio.src = `img/${musicSrc}.mp3`; 
	// 		audio.addEventListener('loadedmetadata',function() {
	// 			total.innerText = Math.floor(audio.duration / 60) 
	// 			+ ' : ' + audio.duration.toFixed(0) % 60;
	// 			const audioDuration = Math.round(audio.duration);
	// 			calcWaveVal(audioDuration);
	// 		});
	// } getLoadedmetadata();

	// function countUp() {
	// 	count++;
	// 	min.textContent = parseInt(newMin) 
	// 	+ parseInt(String(Math.floor(count / 60)).padStart(1,'0'));
	// 	sec.textContent = String(Math.floor(count % 60)).padStart(2,'0');
	// 	timeoutId = setTimeout(() => {
	// 		countUp();
	// 	}, 1000);
	// }

	// function calcWaveVal(audioDuration) {
	// 	const waveForm = document.querySelector('.waveForm');
	// 	const waveRect = waveForm.getBoundingClientRect();
	// 	let perSecVal = (waveRect.width / audioDuration).toFixed(2);
	// 	waveForm.addEventListener('click', (e) => {
	// 		const x = e.clientX - waveRect.x;
	// 		newMin = String(Math.floor((x / perSecVal) / 60)).padStart(1,'0');
	// 		newSec = String(Math.floor((x / perSecVal) % 60)).padStart(2,'0');
	// 		min.textContent = newMin;
	// 		sec.textContent = newSec;
	// 	});
	// } calcWaveVal();

	// function pEvtDecl(pEvt) {
	// 	const waveForm = document.querySelector('.waveForm');
	// 	waveForm.style.setProperty('--pEvt', pEvt);
	// }
	// 	window.addEventListener('resize', () => {
	// 		getLoadedmetadata();
	// 	});

	// const btns = document.querySelectorAll('.btn');
	// btns.forEach(btn => {
	// 	btn.addEventListener('click', () => {
	// 		btns.forEach(btz => {
	// 			btz.style.setProperty('--pEvt', 'none');
	// 			setTimeout(() => {
	// 				btz.style.setProperty('--pEvt', 'initial');
	// 			}, 1200);
	// 		});
	// 		if(btn.classList.contains('fwd')) {index--}
	// 		if(btn.classList.contains('btn-forward')) {index--}
	// 		repeat();
	// 	});
	// });

	// VanillaTilt.init(document.querySelector(".data-tilt"), {
	// 	max: 10,
	// 	speed: 400,
	// 	scale:                  1.05, 
  //   gyroscopeMinAngleX:     -5,    
  //   gyroscopeMaxAngleX:     5,
	// 	// gyroscopeMinAngleY:     -5,    
  //   // gyroscopeMaxAngleY:     5,
	// });


// -------------------------------------------------------

// function timeCounter() {
// 	waveSurfer.on('audioprocess', function () {
// 		if (waveSurfer.isPlaying()) {
// 			let	currentTime = waveSurfer.getCurrentTime();
// 		}
// 	});
// } timeCounter();
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// *                             ----- CUSTOM COUNTER  -----
// ------------------------------------------------------------------------------------------

// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');
// let timeoutId;
// let count = 0;
// let activate = false;

// document.addEventListener('click', () => {
// 	if(activate) {
// 		clearTimeout(timeoutId);
// 		activate = false;
// 		return;
// 	}
//   countUp();
// 	activate = true;
// 	console.log(activate);
// });

// function countUp() {
//   count++;
//   min.textContent = String(Math.floor(count / 60)).padStart(1,'0');
// 	sec.textContent = String(Math.floor(count % 60)).padStart(2,'0');
//   timeoutId = setTimeout(() => {
//     countUp();
//   }, 1000);
// }

// ------------------------------------------------------------------------------------------



