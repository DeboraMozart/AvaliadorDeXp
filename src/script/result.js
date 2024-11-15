const jsConfetti  =  new JSConfetti();
const insertName = document.getElementById('name');
const insertXp = document.getElementById('rank');
window.onload = () => {
    jsConfetti.addConfetti() 
}

jsConfetti .addConfetti();

const xpThresholds = {
    Iron: 1000,
    Bronze: 2000, 
    Silver: 3000, 
    Gold: 4000, 
    Platinum: 5000, 
    Imortal: 6000, 
    Radiance: Infinity 
}

const imagePaths = {
    Iron: "/imagens/emblems-no-background/iron-emblem-no-background.png",
    Bronze: "/imagens/emblems-no-background/bronze-emblem-no-background.png",
    Silver: "/imagens/emblems-no-background/silver-emblem-no-background.png",
    Gold: "/imagens/emblems-no-background/gold-emblem-no-background.png",
    Platinum: "/imagens/emblems-no-background/platinum-emblem-no-background.png",
    Imortal: "/imagens/emblems-no-background/imortal-emblem-no-background.png",
    Radiance: "/imagens/emblems-no-background/radiance-emblem-no-background.png"
}



insertName.textContent = localStorage.getItem('nameKey');
