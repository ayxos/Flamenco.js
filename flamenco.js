var flamenco = function() {
	var containers = document.getElementsByClassName('container');
	if (containers && containers.length) {
		containers[0].innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/QLnEjHuMFsA?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
	} else {
		var div = document.getElementsByTagName('div')[1];
		div.innerHTML = '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/QLnEjHuMFsA?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
	}

	var clickPalmas = function() {
		playAudio();
	};


	function getAudioFor(player){
		if(player.canPlayType("audio/mp3")) {
			return mp3;
		} else if(player.canPlayType("audio/ogg")) {
			return ogg;
		}
	}

	function getPlayer() {
		var container = getContainer(), player
		, players = container.getElementsByTagName("audio");

		for (player in  players) {
			if (player.currentTime === 0 || player.ended) {
				return player;
			}
		}

		player = document.createElement("audio");
		container.appendChild(player);
		return player;
	};

	function getContainer() {
		var container = document.getElementById("fartscroll");

		if (container === null) {
			container = document.createElement("div");
			container.id = "fartscroll";
			document.getElementsByTagName('body')[0].appendChild(container);
		}

		return container;
	}

	function playAudio(position){
		var player = getPlayer()
			, audio = getAudioFor(player)
			, rand = Math.floor(Math.random() * audio.sound.length);

		player.src = audio.prefix + audio.sound[position || rand];
		player.play();
	};

	window.addEventListener('scroll', scrollFart, false);
}

if(window.attachEvent) {
	window.attachEvent('onload', flamenco);
} else {
	if(window.onload) {
		var curronload = window.onload;
		var newonload = function(evt) {
			curronload(evt);
			flamenco(evt);
		};
		window.onload = newonload;
	} else {
		window.onload = flamenco;
	}
}
