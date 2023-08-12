import * as busModule from '/front/static/bus_reservation/bus_common.js';

document.addEventListener('DOMContentLoaded', function () {
    /* -------------- preset ---------- */
    busModule.page_default();
    /* -------------- get elements ---------- */
    const OnTheSpot = document.getElementById('on_the_spot'); //page_1 -> page_2
    const TempPage = document.getElementById('temp_page'); //page_2 -> page_3 (임시로 넘겨주는 id라서 나중에 바뀔예정.)
    const TempPage2 = document.getElementById('temp_page_2'); //page_3 -> page_4 (임시로 넘겨주는 id라서 나중에 바뀔예정.)
    const SeatSelection = document.getElementById('seat_selection'); //page_4 -> page_5 
    const BackBtn = document.querySelectorAll('.back_btn'); // 뒤로가기 버튼
    /* -------------- event listener ---------- */
    OnTheSpot.addEventListener('click',function(){
        busModule.dis_page_2();
    });

    TempPage.addEventListener('click',function(){
        busModule.dis_page_3();
    });

    TempPage2.addEventListener('click',function(){
        busModule.dis_page_4();
    });

    SeatSelection.addEventListener('click',function(){
        busModule.dis_page_5();
    });

    BackBtn.addEventListener('click',function(){
        busModule.get_Page_Id();
    });

    BackBtn.forEach(Btn=>function(){
        Btn.addEventListener('click',function(){
            busModule.get_Page_Id();
        });
    });
  });