const jsConfetti  =  new JSConfetti();
jsConfetti .addConfetti();

function playSound(audioName){
    let audio = new Audio(`/src/sounds/${audioName}.mp3`);
    audio.volume = 0.09
    audio.play()
}

function typingSound(){
    playSound("writing-sound");

}

function btnConfirm(){
    playSound("confirm-sound");
}

function btnPlus(){
    playSound("hit-sound-xp");
}

function btnSub(){
    playSound("hit-sound-xp");
}

