const consumerGoods = document.getElementById("consumerGoods");
const territory = document.getElementById("territory");
const maps = document.getElementById("maps");

const closeAllDivs = () => {
  consumerGoods.style = "display: none;";
  territory.style = "display: none;";
  maps.style = "display: none;";
};

window.onload = () => {
  console.log("onload");
  closeAllDivs();
};

const divConsumerGoods = () => {
  //console.log("divConsumerGoods");
  let shouldOpen = consumerGoods.style.display === "none";
  closeAllDivs();
  if (shouldOpen) {
    consumerGoods.style = "display: block;";
  }
};

const divTerritory = () => {
  //console.log("divTerritory");
  let shouldOpen = territory.style.display === "none";
  closeAllDivs();
  if (shouldOpen) {
    territory.style = "display: block;";
  }
};

const divMaps = () => {
  //console.log("divMaps");
  let shouldOpen = maps.style.display === "none";
  closeAllDivs();
  if (shouldOpen) {
    maps.style = "display: block;";
  }
};
