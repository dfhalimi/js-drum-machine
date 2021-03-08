var output = document.getElementById("output");
var volumeSlider = document.getElementById("volume-slider");
var powerSwitch = document.getElementById("power-switch");
var drumSwitch = document.getElementById("kit-switch");
var heaterKit = ["Heater-1", "Heater-2", "Heater-3", "Heater-4_1", "Heater-6", "Dsc_Oh", "Kick_n_Hat", "RP4_KICK_1", "Cev_H2"];
var pianoKit = ["Chord_1", "Chord_2", "Chord_3", "Give_us_a_light", "Dry_Ohh", "Bld_H1", "punchy_kick_1", "side_stick_1","Brk_Snr"];
var audioSrc = heaterKit;
var audioLink = "https://s3.amazonaws.com/freecodecamp/drums/";
var audio = new Audio();


function playSound(id) {
    if(powerSwitch.checked) {
        audio.src = audioLink + audioSrc[id] + ".mp3";
        audio.play();
        output.innerHTML = audioSrc[id];
    }
}

function setVolume() {
    if(powerSwitch.checked) {
        audio.volume = volumeSlider.value / 100;
        output.innerHTML = "Volume: " + volumeSlider.value;
    }
}

function switchKit() {
    if(powerSwitch.checked) {
        if(drumSwitch.checked) {
            audioSrc = pianoKit;
            document.getElementById("output").innerHTML = "Smooth Piano Kit";
        }
        else {
            audioSrc = heaterKit;
            document.getElementById("output").innerHTML = "Heater Kit";
        }
    }
}

function powerToggle() {
    if(!powerSwitch.checked) {
        document.getElementById("output").innerHTML = "";
    }
}