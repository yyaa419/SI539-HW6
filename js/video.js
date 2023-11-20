// Page Load
var video = document.querySelector('.video');
var autoPlay=false;
var loop=false;
var volume=document.querySelector('#slider')
var volume_input=document.querySelector('#volume')
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoPlay=false;
	video.loop=false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

function updateVolumeInfo(){
	console.log("Current Volume: " + volume.value);
	volume_input.innerHTML=volume.value+"%"
}

// Pause Button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	if (video.playbackRate>0){
		video.playbackRate -= 0.1;
	}
	console.log("Current Speed: " + video.playbackRate.toFixed(2))
})

//Speed Up 
//what does it mean by within 5 digits of 100% again
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	if (video.playbackRate>0){
		video.playbackRate += 0.1;
	}
	console.log("Current Speed: " + video.playbackRate.toFixed(2))
})


//Skip Ahead
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current Location: " + video.currentTime.toFixed(2));
})

//Mute

document.querySelector("#mute").addEventListener("click", function(){
	var isMuted=video.muted
	var muteBottomName=document.querySelector("#mute")
	if (isMuted==true){
		muteBottomName.textContent="Mute"
		console.log("Unmute");
		video.muted=false;
	}
	else{
		muteBottomName.textContent="Unmute"
		console.log("Mute")
		video.muted=true
	}

})

//Volume Slider
document.querySelector("#slider").addEventListener("click", function(){
	console.log("Change Volume");
	volume_input.innerHTML=volume.value+"%"
	video.volume=volume.value/100
	console.log("Current Volume: " + volume.value);

})

//Styled
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Styled");
	video.classList.add("oldSchool")
})

//Original
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
})
