const consumerGoodsStandardObject = document.getElementById("consumerGoodsStandardObject");
const consumerGoodsRetailsExecution = document.getElementById("consumerGoodsRetailsExecution");
const consumerGoodsStandardComponents = document.getElementById("consumerGoodsStandardComponents")


const territory = document.getElementById("territory");
const maps = document.getElementById("maps");

const closeAllDivs = () => {
  consumerGoodsStandardObject.style = "display: none;";
  consumerGoodsStandardComponents.style = "display: none;";



  territory.style = "display: none;";
  maps.style = "display: none;";
};

const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
  closeAllDivs();
};

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};


window.onload = () => {
  //console.log("onload");
  closeAllDivs();
};

const divConsumerGoodsStandardObjects = () => {
  //console.log("divConsumerGoodsStandardObjects");
  let shouldOpen = consumerGoodsStandardObject.style.display === "none";
  closeNav();
  closeAllDivs();
  if (shouldOpen) {
    consumerGoodsStandardObject.style = "display: block;";
  }
};

const divConsumerGoodsStandardComponents = () => {
  let shouldOpen = consumerGoodsStandardComponents.style.display === "none";
  closeNav();
  closeAllDivs();
  if (shouldOpen) {
    consumerGoodsStandardComponents.style = "display: block;";
  }
};

const divConsumerGoodsRetailsExecution = () => {
  //console.log("divConsumerGoodsRetailsExecution");
  let shouldOpen = consumerGoods.style.display === "none";
  closeNav();
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