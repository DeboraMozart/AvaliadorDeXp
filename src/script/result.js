const jsConfetti  =  new JSConfetti();
const insertName = document.getElementById('name');
const insertXp = document.getElementById('rank');
const insetImage = document.getElementById('image');
let getXp = localStorage.getItem('xpKey');

insertName.textContent = localStorage.getItem('nameKey');
//insertXp.textContent = localStorage.getItem('xpKey');


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
    Iron: "src/imagens/emblems-no-background/iron-emblem-no-background.png",
    Bronze: "src/imagens/emblems-no-background/bronze-emblem-no-background.png",
    Silver: "src/imagens/emblems-no-background/silver-emblem-no-background.png",
    Gold: "src/imagens/emblems-no-background/gold-emblem-no-background.png",
    Platinum: "src/imagens/emblems-no-background/platinum-emblem-no-background.png",
    Imortal: "src/imagens/emblems-no-background/imortal-emblem-no-background.png",
    Radiance: "src/imagens/emblems-no-background/radiance-emblem-no-background.png"
}


function choseRank() {
    switch (true) {
      case getXp <= 1000:
        insertXp.textContent = "Iron";
        insetImage.src = imagePaths.Iron;
        break;
      case getXp <= 2000:
        insertXp.textContent = "Bronze";
        insetImage.src = imagePaths.Bronze;
        break;
      case getXp <= 3000:
        insertXp.textContent = "Silver";
        insetImage.src = imagePaths.Silver;
        break;
      case getXp <= 4000:
        insertXp.textContent = "Gold";
        insetImage.src = imagePaths.Gold;
        break;
      case getXp <= 5000:
        insertXp.textContent = "Platinum";
        insetImage.src = imagePaths.Platinum;
        break;
      case getXp <= 6000:
        insertXp.textContent = "Imortal";
        insetImage.src = imagePaths.Imortal;
        break;
      default:
        insertXp.textContent = "Radiance";
        insetImage.src = imagePaths.Radiance;
    }
  }

choseRank();
localStorage.removeItem('nameKey');
localStorage.removeItem('xpKey');