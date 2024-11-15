
let storeName = document.querySelector("#name-field");
let storeXp = document.querySelector("#xp-field");


function playSound(audioName){
    let audio = new Audio(`/src/sounds/${audioName}.mp3`);
    audio.volume = 0.09
    audio.play()
}

function typingSound(){
    playSound("writing-sound");

}

function btnSave(){
    localStorage.setItem("nameKey", storeName.value);
    localStorage.setItem("xpKey", storeXp.value);
}
