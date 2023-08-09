// import every function form common.js
import * as commonModule from '/front/static/caffe_order/kiosk/common/common.js';

const returnAddress = '/front/static/caffe_order/kiosk/practice/order_mission/order_mission.html';
/* ========= preset ========= */
// map each items of menu with the increasing numbers
const menu = new Map();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mega_start_img').style.display = 'none'; // remove first image and replace with level selection page

  //- menu for drinks - add all menus in this menu(map) to select random drinks.
  let idCount = 1;
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
});
/* ========= preset ========= */


//after all content loaded.
document.addEventListener('DOMContentLoaded', function () {
  /* -------------- get elements ---------- */
  const megaStartBtn = document.getElementById('mega_start_btn'); //start button
  const megaHomeIcon = document.getElementById('mega_top_bar_home'); // home icon
  const leftArrowMenuBar = document.getElementById('menu_bar_left'); // left arrow of menu bar
  const rightArrowMenuBar = document.getElementById('menu_bar_right'); // right arrow of menu bar
  const menuBar1 = document.querySelectorAll('.mega_menu_1'); // first menu bar (page1)
  const menuBar2 = document.querySelectorAll('.mega_menu_2') // seoond menu bar (page2)
  const pickItems = document.querySelectorAll('.pick_item'); // for picking items
  const openPaymentWindow = document.getElementById('total_price'); // open payment window
  const closePaymentWindow = document.querySelectorAll('.close_window_pay'); // close payment window
  const paymentWindow = document.querySelectorAll('.change_window_btn'); // pay start
  const backButton = document.getElementById('돌아가기_2'); // back button before final payment.
  const payWithCardButton = document.getElementById('카드결제'); // button  for card payment
  const payCancelButtons = document.querySelectorAll('.close_w_카드결제'); // x button for total cancellation.
  const confirmPayButton = document.getElementById('승인요청'); // confirmButton to scroll down the window page
  const cardMovingButton = document.getElementById('insert_card_moving'); // moving card
  const levelButtons = document.querySelectorAll('button[id^="level"]'); // buttons for selecting level of missions

  /* -------------- event listener ---------- */

  // moving card
  cardMovingButton.addEventListener('click', function () {
    function buy_item(items) {
      if (missionSucced == true) {
        alert(
          "축하합니다. " +
          items+
          " 주문하기 성공!"
        );
        location.href = returnAddress;
      } else {
        alert(
          items + " 주문하기 실패! 다시 도전해보세요."
        );
        location.href =
          returnAddress;
      }
    }
    
    let missionSucced = false;
    let count = 0;
    for (let i = 1; i <= missionItems.length; i++) {
      let success = document.getElementById('item_' + i).checked;
      if (success == true)
        count++;
    }
    if(missionItems.length==count)
      missionSucced=true;
    
    buy_item(missionItems);
  });
  // confirmButton to scroll down the window page
  confirmPayButton.addEventListener('click', function () {
    commonModule.scrollToBottom();
    alert('아래 카드를 클릭해주세요!');
  });
  // x button for total cancellation.
  payCancelButtons.forEach(cancelButton => {
    cancelButton.addEventListener('click', function () {
      commonModule.close_w_카드결제();
    });
  });
  // button clicked for card payment
  payWithCardButton.addEventListener('click', function () {
    commonModule.open_w_카드결제();
  });
  //back button before final payment
  backButton.addEventListener('click', function () {
    commonModule.back_2_window_btn();
  });
  // pay start 
  paymentWindow.forEach(payButton => {
    payButton.addEventListener('click', function () {
      commonModule.change_window_btn();
    });
  });
  // close payement widnow
  closePaymentWindow.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
      commonModule.close_window_pay();
    })
  });
  // open payment window
  openPaymentWindow.addEventListener('click', function () {
    commonModule.open_window_pay(order_list);
  });
  // for picking items
  pickItems.forEach(selectedItem => {
    selectedItem.addEventListener('click', function () {
      const id = this.getAttribute('id');
      const price = this.getAttribute('data-price');
      pick_item(id, price);
    }
    )
  });
  // first menu bar (page1)
  menuBar1.forEach(menuItem1 => {
    menuItem1.addEventListener('click', function () {
      const title = this.getAttribute('title');
      commonModule.open_menu_table(title);
    });
  });
  // seoond menu bar (page2)
  menuBar2.forEach(menuItem2 => {
    menuItem2.addEventListener('click', function () {
      const title = this.getAttribute('title');
      commonModule.open_menu_table(title);
    });
  });
  // right arrow of menu bar
  rightArrowMenuBar.addEventListener('click', function (event) {
    const id = event.target.id;
    commonModule.turn_menu_page(id);
  });
  // left arrow of menu bar
  leftArrowMenuBar.addEventListener('click', function (event) {
    const id = event.target.id;
    commonModule.turn_menu_page(id);
  });
  // home icon
  megaHomeIcon.addEventListener('click', function () {
    location.href =
      "/front/static/caffe_order/kiosk/order_mission/order_mission.html";
  });
  //start button
  megaStartBtn.addEventListener('click', function () {
    commonModule.start_btn();
  });
  //button for selecting level to get random mission
  levelButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

});

/* --- button listner ----- */
//to avoid duplication of menu, get only the unique numbers according to the mission level.
const uniqueNumbers = new Set();
// list of items the user has to order.
const missionItems = [];

//creaete unique random numbers to avoid duplication of same drinks.
function generateUniqueRandomNumbers(count, max) {
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * max) + 1;
    uniqueNumbers.add(randomNumber);
  }
}
// when level button clicked.
function handleButtonClick(event) {
  // the number of drinks that the user has to order.
  const buttonValue = event.target.value;

  // create the unique random numbers to get random drinks.
  generateUniqueRandomNumbers(buttonValue, menu.size);

  // create missionItem list with the unique random number.
  // get items' names from the map with the numbers.
  uniqueNumbers.forEach((value) => missionItems.push(menu.get(value)));

  //hide level selecting button to start the mission.
  const levelButtons = document.getElementsByClassName('level_button');
  for (let i = 0; i < levelButtons.length; i++) {
    levelButtons[i].style.display = 'none';
  }
  //display deciription on the right bar 
  // so the user can understand the rule or misson.
  let decription = document.getElementById("level_" + buttonValue);
  decription.style.display = "block";


  // display a list of mission items so the user knows what to order.
  const targetElement = decription.querySelector(".target");
  let itemNumber = 1;
  let itemList = "";
  missionItems.forEach((value) => {
    itemList +=
      '<div>' +
      '<label for = "item_' + itemNumber + '">' + itemNumber + '. ' + value + '</label>' +
      '<input type="checkbox" id = "item_' + itemNumber++ + '" name = "' + value + '"disabled>'
      + '</div>';
  });
  targetElement.innerHTML = itemList;

  // mission start.
  commonModule.start_btn();
}


/*==================== 3. pick & count & coloring itmes ====================*/
//get item infromation from HTML
function itemGet(name, price) {
  this.name = name; // name of selected item
  this.number = 1; // number count for how many items are selecting for each.
  this.price = parseInt(price); // price of selected item
}

let order_list = [];
let colorCount = 1;
let mission = 0;

// when the user clicks any image of the item on the menu table.
// add selected items to the order_list array;
function pick_item(id, price) {
  let drink = document.getElementById(id); //
  let order = new itemGet(id, price);
  let found = false;


  missionItems.forEach((value) => {
    if (id == value) {
      const checkbox = document.getElementById('item_' + (mission + 1));
      checkbox.disabled = false;
      checkbox.checked = true;
      checkbox.disabled = true;
      ++mission;
    }
  });



  for (let i in order_list) {
    //if seleted item was selected before.
    if (order.name == order_list[i].name) {
      order_list[i].number += 1; // item count for each item ex) x2 or x3
      found = true; //
      break;
    }
  }
  if (!found) {
    if (colorCount > 7) {
      maxItems();
      return;
    }
    colorCount++;
    drink.style.borderStyle = "solid";
    drink.style.borderColor = "red";
    order_list.push(order);
  }

  commonModule.open_order_list(order_list);
}

function maxItems() {
  alert("7개 이상의 아이템을 선택하셨습니다. 추가 선택이 불가합니다.");
}

/*==================== 3. pick & count & coloring itmes ====================*/