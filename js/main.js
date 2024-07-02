let currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, "0");
var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
var yyyy = currentDate.getFullYear();
currentDate = mm + "/" + dd + "/" + yyyy;
console.log(currentDate);
// ==================================================================
// ==================================================================
let myAge = document.querySelector("#myAge");
let btnCulc = document.querySelector("#btnCulc");

let box = document.querySelector(".box");
btnCulc.addEventListener("click", function (e) {
  let myName = myAge.previousElementSibling.value;
  let age = myAge.value.split("-");
  let year = yyyy - age[0];
  let month = mm - age[1];
  let day = dd - age[2];
  console.log("before => ", month);
  if(month <= 0) {
    year -= 1;
    month = 12 - (month * -1) 
  }
  console.log("after => ", month);
  if(day <= 0) {
    month -= 1;
    day = 30 - (day * -1) 
  }
  console.log(`Hi ${myName} You are ${year} years, ${month} months, ${day} days old.`);
  if (myName != "" && age != "") {
    box.firstElementChild.lastElementChild.innerHTML = myName;
    box.children[1].lastElementChild.innerHTML = myAge.value;
    box.children[2].lastElementChild.innerHTML = `${year} Years ${month} Month ${day} Days`;
    box.children[3].lastElementChild.innerHTML = (year * 12) + month;
    box.children[4].lastElementChild.innerHTML = Math.ceil(((year * 365) + (month * 30) + day) / 7);
    box.children[5].lastElementChild.innerHTML = (year * 365) + (month * 30) + day ;
  }
});
