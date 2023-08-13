import { start_btn } from '/hackathon/static/js/kiosk/common.js';
/* ========= preset ========= */

document.getElementById('mega_start_img').style.display='none';
/* ========= preset ========= */


/*----------------------- random ------------------------*/

//- menu for drinks -
let idCount = 1; 
const menu = new Map();
const rowDivs = document.querySelectorAll(".row");

for (const rowDiv of rowDivs) {

  const menuItems = rowDiv.querySelectorAll("div");
  for (const menuItem of menuItems) {
    if (menuItem.hasAttribute("id")) {
      menu.set(idCount++, menuItem.id);
    }
  }
}
console.log(menu);


//- get random Number -
const uniqueNumbers = new Set();
function generateUniqueRandomNumbers(count, max) {
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * max) + 1;
      uniqueNumbers.add(randomNumber);
    }
}



/* --- button listner ----- */
const levelButtons = document.querySelectorAll('button[id^="level"]');
levelButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const buttonValue = event.target.value;
  let decription = document.getElementById("level_"+buttonValue);
  decription.style.display = "block";

  generateUniqueRandomNumbers(buttonValue,menu.size);
  let missionItems = [];
  uniqueNumbers.forEach((value)=>missionItems.push(menu.get(value)));

  console.log(missionItems);
  const levelButtons = document.getElementsByClassName('level_button');
  for (let i = 0; i < levelButtons.length; i++) {
    levelButtons[i].style.display = 'none';
  }
  const targetElement = decription.querySelector(".target");
  let itemNumber =1;
  let itemList ="";
  missionItems.forEach((value )=> { 
    itemList += 
    '<div>' + 
    '<label for = "item_'+ itemNumber +'">'+itemNumber+'. '+value+ '</label>' +
    '<input type="checkbox" id = "item_'+  itemNumber++ + '" name = "'+ value+ '"/>'
    +'</div>';
  });
  targetElement.innerHTML=  itemList;
  document.getElementById('mega_start_img').style.display='block';
  start_btn();
}
/*----------------------- random ------------------------*/


