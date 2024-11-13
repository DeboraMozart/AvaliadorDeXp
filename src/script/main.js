const state = {
    view:{
        xp: document.querySelector("#xp-field"),
        name: document.querySelector("#name-field"),
        spanName: document.getElementById('name-teste')
    }, 
    values:{
        xpValue: 0,
        confirmButton: document.querySelector("#confirm")
    }
}


function playSound(audioName){
    let audio = new Audio(`/src/sounds/${audioName}.mp3`);
    audio.volume = 0.09
    audio.play()
}

function typingSound(){
    playSound("writing-sound");

}

//Vai chamar a função que irá armazenar os valores do input e do objeto state
function btnConfirm(){
    playSound("confirm-sound");
    updateImageBasedOnXp();
    storeName();
    storeXp();
}


//vai salvar em localStorage o nome e o objeto
function storeName(){
    localStorage.setItem('theState', JSON.stringify(state));
    localStorage.setItem('Message','whatsup');
} 

function btnPlus(){
    playSound("hit-sound-xp");
   if(state.values.xpValue <= 10002){
        state.values.xpValue++;
        updateXp(state.values.xpValue);
   }else{
        alert("Você atingiu o limite máximo, tente novamente");
   }
    
}

function btnSub(){
    playSound("hit-sound-xp");
     if(state.values.xpValue > 0){
        state.values.xpValue--;
        updateXp(state.values.xpValue);
       
    }else{
        alert("Você atingiu o limite mínimo, tente novamente");
    }
}

function updateXp(newValue){
    state.view.xp.value = newValue;
}

function btnReset(){
    state.view.xp.value = 0;
    state.values.xpValue = 0;
    state.view.name.value = " ";
    
}
