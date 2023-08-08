// import every function form common.js
import * as commonModule from '/front/static/caffe_order/kiosk/common/common.js';

//after all content loaded.
document.addEventListener('DOMContentLoaded', function() {
  /* -------------- get elements ---------- */
  const megaStartBtn = document.getElementById('mega_start_btn'); //start button
  const megaHomeIcon = document.getElementById('mega_top_bar_home'); // home icon
  const leftArrowMenuBar = document.getElementById('menu_bar_left'); // left arrow of menu bar
  const rightArrowMenuBar = document.getElementById('menu_bar_right'); // right arrow of menu bar
  const menuBar1 = document.querySelectorAll('.mega_menu_1'); // first menu bar (page1)
  const menuBar2 = document.querySelectorAll('.mega_menu_2') // seoond menu bar (page2)
  const pickItems = document.querySelectorAll('.pick_item'); // for picking items
  const openPaymentWindow = document.getElementById('total_price'); // open payment window
  const closePaymentWindow  = document.querySelectorAll('.close_window_pay'); // close payment window
  const paymentWindow = document.querySelectorAll('.change_window_btn'); // pay start
  const backButton = document.getElementById('돌아가기_2'); // back button before final payment.
  const payWithCardButton = document.getElementById('카드결제'); // button  for card payment
  const payCancelButtons = document.querySelectorAll('.close_w_카드결제'); // x button for total cancellation.
  const confirmPayButton = document.getElementById('승인요청'); // confirmButton to scroll down the window page
  const cardMovingButton = document.getElementById('insert_card_moving'); // moving card

  
  /* -------------- event listener ---------- */

  // moving card
  cardMovingButton.addEventListener('click',function(){
    alert("감사합니다. 결제가 완료되었습니다. 교환권과 카드를 챙겨가세요.");
    location.href = "/front/static/caffe_order/kiosk/simulation/simulator.html";
  });
  // confirmButton to scroll down the window page
  confirmPayButton.addEventListener('click',function(){
    commonModule.scrollToBottom();
    alert('아래 카드를 클릭해주세요!');
  });
  // x button for total cancellation.
  payCancelButtons.forEach(cancelButton=>{
    cancelButton.addEventListener('click',function(){
      commonModule.close_w_카드결제();
    });
  });
  // button clicked for card payment
  payWithCardButton.addEventListener('click',function(){
    commonModule.open_w_카드결제();
  });
  //back button before final payment
  backButton.addEventListener('click', function(){
    commonModule.back_2_window_btn();
  });
  // pay start 
  paymentWindow.forEach(payButton=> {
    payButton.addEventListener('click',function(){
      commonModule.change_window_btn();
    });
  });
  // close payement widnow
  closePaymentWindow.forEach(closeButton => {
    closeButton.addEventListener('click',function(){
        commonModule.close_window_pay();
      })
    });
  // open payment window
  openPaymentWindow.addEventListener('click',function(){
    commonModule.open_window_pay();
  });
  // for picking items
  pickItems.forEach(selectedItem => {
    selectedItem.addEventListener('click',function(){
      const id = this.getAttribute('id');
      const price = this.getAttribute('data-price');
      commonModule.pick_item(id,price);
    }
  )});
  // first menu bar (page1)
  menuBar1.forEach(menuItem1 => {
      menuItem1.addEventListener('click', function() {
          const title = this.getAttribute('title');
          commonModule.open_menu_table(title);
      });
  });
  // seoond menu bar (page2)
  menuBar2.forEach(menuItem2 => {
    menuItem2.addEventListener('click', function() {
        const title = this.getAttribute('title');
        commonModule.open_menu_table(title);
    });
});
  // right arrow of menu bar
  rightArrowMenuBar.addEventListener('click',function(event){
    const id = event.target.id;
    commonModule.turn_menu_page(id);
  });
  // left arrow of menu bar
  leftArrowMenuBar.addEventListener('click',function(event){
    const id = event.target.id;
    commonModule.turn_menu_page(id);
  });
  // home icon
  megaHomeIcon.addEventListener('click',function(){
    commonModule.href_home();
  });
   //start button
  megaStartBtn.addEventListener('click', function() {
      commonModule.start_btn();
  });
});
