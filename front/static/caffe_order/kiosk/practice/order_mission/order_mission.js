// import every function form common.js
import * as commonModule from '/front/static/caffe_order/kiosk/common/common.js';


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
    alert("감사합니다. 결제가 완료되었습니다. 교환권과 카드를 챙겨가세요.");
    location.href = "/front/static/caffe_order/kiosk/simulation/simulator.html";
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
    commonModule.open_window_pay();
  });
  // for picking items
  pickItems.forEach(selectedItem => {
    selectedItem.addEventListener('click', function () {
      const id = this.getAttribute('id');
      const price = this.getAttribute('data-price');
      commonModule.pick_item(id, price);
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
    commonModule.href_home();
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
const uniqueNumbers = new Set();
function handleButtonClick(event) {

  const buttonValue = event.target.value; 
  let decription = document.getElementById("level_" + buttonValue);
  decription.style.display = "block";

  generateUniqueRandomNumbers(buttonValue, menu.size);
  let missionItems = [];
  uniqueNumbers.forEach((value) => missionItems.push(menu.get(value)));

  console.log(missionItems);
  const levelButtons = document.getElementsByClassName('level_button');
  for (let i = 0; i < levelButtons.length; i++) {
    levelButtons[i].style.display = 'none';
  }
  const targetElement = decription.querySelector(".target");
  let itemNumber = 1;
  let itemList = "";
  missionItems.forEach((value) => {
    itemList +=
      '<div>' +
      '<label for = "item_' + itemNumber + '">' + itemNumber + '. ' + value + '</label>' +
      '<input type="checkbox" id = "item_' + itemNumber++ + '" name = "' + value + '"/>'
      + '</div>';
  });
  targetElement.innerHTML = itemList;

  commonModule.start_btn();
}








