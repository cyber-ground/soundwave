'use strict';



// ------------------------------------------------------------------------------------------
// *                          ----- *** SOUND WAVE *** -----
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

	const mobile = navigator.userAgent.match(/iPhone|Android.+Mobile/);
	const iOS = window.matchMedia('(max-device-width: 1366px)').matches;
	const controller = document.querySelector('.controller');
	const handle = document.querySelector('.handle');
	const title = document.querySelector('.title');
	const btns = document.querySelectorAll('.btn');
	const playBtn = document.querySelector('.playBtn');
	const volume = document.querySelector('.volume');
	const total = document.getElementById('time-total');
	const current = document.getElementById('time-current');
	const docElem = document.documentElement;
	let audio = new Audio(); 
	let savedPeaks = null; 
	let repeated = false;
	let index = 0; //*>
	let musicSrc = music[index]; //*>
	let clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
		title.innerText = musicSrc; 
		docElem.style.setProperty('--clr', clr);
		pEvtDecl('none'); 

	var waveSurfer = WaveSurfer.create({
		container: '#waveform',
		waveColor: 'rgba(0, 0, 0, 0.5)',
		progressColor: clr,
		barWidth: 1,
		responsive: true,
		height: 90,
		barRadius: 0,
	});

	waveSurfer.load(`./${musicSrc}.mp3`);
	waveSurfer.on('finish', repeat);

	//* event ---------------------------

	volume.addEventListener('click', () => {
		if(!playBtn.classList.contains('active')) return;
		waveSurfer.toggleMute();
		volume.classList.toggle('active');
	});

	handle.addEventListener('mousedown', () => {
		document.addEventListener('mousemove', draggable);
	});
	handle.addEventListener('mouseup', () => {
		document.removeEventListener('mousemove', draggable);
	});

	if(mobile||iOS) { 
		handle.addEventListener('touchstart', () => { 
			document.addEventListener('touchmove', draggableMobile);
		});
		handle.addEventListener('touchend', () => {
			document.removeEventListener('touchmove', draggableMobile);
		});
		btns.forEach(btn => {btn.addEventListener('touchstart', () => {})});
	}

	playBtn.addEventListener('click', () => {
		waveSurfer.playPause();
		playBtn.classList.toggle('active');
		volume.classList.toggle('active');
		if(playBtn.classList.contains('active')) {
			pEvtDecl('initial');
		} else { pEvtDecl('none') }
	});

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			btns.forEach(btz => {
				btz.style.setProperty('--pEvt', 'none');
				setTimeout(() => { btz.style.setProperty('--pEvt', 'initial')}, 1200);
			});
			if(btn.classList.contains('prev') && index === 0) return;
			if(btn.classList.contains('prev')) {index--}
			if(btn.classList.contains('btn-prev')) {index--}
			volume.classList.add('active');
			repeated = true;
			repeat();
		});
	});

	//* ----------------------------------------------

	function repeat() {
		waveSurfer.stop();
		playBtn.classList.remove('active');
		volume.classList.remove('active');
		current.innerText = '0 : 00';
		total.innerText = '0 : 00';
		index++;
		if(index === music.length) {index = 0}
		musicSrc = music[index];
		if(musicSrc === music[2]) {title.style.fontSize = 'clamp(1em, 2vw, 1.5em)'} 
		else {title.style.fontSize = 'clamp(0.8em, 3vw, 1.8em)'} 
		clr = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
		docElem.style.setProperty('--clr', clr);
		playBtn.style.setProperty('--clr', clr);
		title.innerText = musicSrc; //*
		audio.src = `./${musicSrc}.mp3`; 
		createWaveSurfer();
		getCenterPosition(); //*** */
		if(mobile||iOS) { getCenterPosition() } //*** */
		waveSurfer.load(`./${musicSrc}.mp3`);
		waveSurfer.on('finish', repeat);
		waveSurfer.on('ready', () => {
			waveSurfer.play();
			playBtn.classList.add('active');
			volume.classList.add('active');
			if(mobile||iOS) { mobileHandler() }
			timeCounter();
		});
	}

	function createWaveSurfer() {
		const waveForm = document.querySelector('.waveForm');
		waveForm.remove();
		const track = document.querySelector('.track');
		const newElem = document.createElement('div');
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
		});
	}

	function mobileHandler() {
		const duration = waveSurfer.getDuration();
		waveSurfer.on('audioprocess', () => {
			const current = waveSurfer.getCurrentTime();
			if(current > duration - 1) { repeated = false }
		});
		if(!repeated) {
			waveSurfer.pause();
			pEvtDecl('none');
			playBtn.classList.remove('active');
			volume.classList.remove('active');
			waveSurfer.setMute(false);
		}
	}

	function timeCounter() {
		waveSurfer.on('audioprocess', () => {
			if (waveSurfer.isPlaying()) {
				let currentTime = waveSurfer.getCurrentTime();
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

	//* audio event ---
	function getLoadedmetadata() { 
		audio.src = `./${musicSrc}.mp3`; 
		audio.addEventListener('loadedmetadata', () => {
			total.innerText = Math.floor(audio.duration / 60) 
			+ ' : ' + String(audio.duration.toFixed(0) % 60).padStart(2,'0');
		}); 
	} getLoadedmetadata();

	function pEvtDecl(pEvt) {
		const waveForm = document.querySelector('.waveForm');
		waveForm.style.setProperty('--pEvt', pEvt);
	}

	function draggable(e) {
		const rect = controller.getBoundingClientRect();
		controller.style.left = e.clientX - rect.width / 2 + 'px';
		controller.style.top = e.clientY - rect.height + 8 + 'px';
	}

	function draggableMobile(e) {
		const rect = controller.getBoundingClientRect();
		if(rect.x + rect.width > innerWidth+rect.width/3 || rect.x < -rect.width/3) {
			document.removeEventListener('touchmove', draggableMobile);
			setTimeout(getCenterPosition, 100);
		} else if(rect.y + rect.height - rect.height/2 < 0 
			|| rect.y + rect.height > innerHeight-10) {
			document.removeEventListener('touchmove', draggableMobile);
			setTimeout(getCenterPosition, 100);
		} else {
			controller.style.left = e.touches[0].clientX - rect.width / 2 + 'px';
			controller.style.top = e.touches[0].clientY - rect.height / 1.2 + 'px';
		}
	}

	function getCenterPosition() {
		const rect = controller.getBoundingClientRect();
		controller.style.left = innerWidth / 2 - rect.width / 2 + 'px';
		controller.style.top = innerHeight / 2 - rect.height / 2 + 'px';
	}
	
	//* event progress wave peak ---
	const responsiveWave = waveSurfer.util.debounce(() => {
		let currentProgress = waveSurfer.getCurrentTime() / waveSurfer.getDuration();
		if(playBtn.classList.contains('active')) {
			waveSurfer.pause();
			waveSurfer.empty(); 
			waveSurfer.drawBuffer(); 
			waveSurfer.seekTo(currentProgress);
			waveSurfer.play();
		} else { 
			waveSurfer.empty(); 
			waveSurfer.drawBuffer(); 
			waveSurfer.seekTo(currentProgress);
		}
		getCenterPosition();
	}, 150);
	window.addEventListener('resize', responsiveWave); 



// ------------------------------------------------------------------------------------------
























