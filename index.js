import data from "./data.js"
import {createTableElements} from "./main.js";


createTableElements([], "singlecity")
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});


document.querySelector("#populationBigger").addEventListener("click",()=>{
const bigger=data.filter((Bigger)=>{
return Bigger.population> 500000;

}
);
//console.log(bigger);
createTableElements(bigger, "allcities");

});

//landAreaLess
document.querySelector("#landAreaLess").addEventListener("click",()=>{
const area=data.filter(Area=>Area.landArea < 1000);
//console.log(area);
createTableElements(area, "allcities");
});

/// Does any city has population less than 100.000?
document.querySelector("#isPopulationLess").addEventListener("click",()=>{
const doesPopolation=data.some(populationLess=>populationLess.population < 100000);
if(doesPopolation){toastr.success("YES")}
else{ toastr.error("No")}
//console.log(doesPopolation)
});
//Does every city has land area bigger than 100?
document.querySelector("#isLandBigger").addEventListener("click",()=>{
const isLandBigger=data.every(landBigger=>landBigger.landArea > 100);
if(isLandBigger){toastr.success("YES")}
else{ toastr.error("No")}

//console.log(isLandBigger);
});

//city select => #selectcity

const dataName1 =data.map(cityName => cityName.name);
const selectCity=document.querySelector(".custom-select");
dataName1.forEach((element)=>{
const creatCities=document.createElement("option");
creatCities.setAttribute("value",element);
  creatCities.textContent=element;
  selectCity.appendChild(creatCities);
})


//Select 
selectCity.addEventListener("change",(event)=>{
 
const selectCities=data.filter(cities=>event.target.value === cities.name);
//console.log(selectCities)
  createTableElements(selectCities, "singlecity")
  
});
