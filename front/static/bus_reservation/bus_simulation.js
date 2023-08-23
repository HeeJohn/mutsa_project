import * as busModule from '/front/static/bus_reservation/bus_common.js';

document.addEventListener('DOMContentLoaded', function () {
    /* -------------- preset ---------- */
    busModule.page_default();
    /* -------------- get elements ---------- */
    const OnTheSpot = document.getElementById('on_the_spot'); //page_1 -> page_2
    // const TempPage = document.getElementById('전체_'); //page_2 -> page_3 (임시로 넘겨주는 id라서 나중에 바뀔예정.)
    const TempPage2 = document.getElementById('temp_page_2'); //page_3 -> page_4 (임시로 넘겨주는 id라서 나중에 바뀔예정.)
    const SeatSelection = document.getElementById('seat_selection'); //page_4 -> page_5 
    const BackBtn = document.querySelectorAll('.back_btn'); // 뒤로가기 버튼
    const startBtn_On = document.getElementById('start_btn');
    const endtBtn_On = document.getElementById('end_btn');
    const catagoty_Selection = document.querySelectorAll('.province');
    // const startResultDiv = document.getElementById('start_result'); // 표시할 div
    // const endResultDiv = document.getElementById('end_result'); // 표시할 div
    /* -------------- event listener ---------- */
    OnTheSpot.addEventListener('click',function(){
        busModule.dis_page_2();
    });

    // TempPage.addEventListener('click',function(){
    //     busModule.dis_page_3();
    // });

    TempPage2.addEventListener('click',function(){
        busModule.dis_page_4();
    });

    SeatSelection.addEventListener('click',function(){
        busModule.dis_page_5();
    });

    BackBtn.forEach(btn => btn.addEventListener('click',function(){
        busModule.goBack();
    }));

    startBtn_On.addEventListener('click',function(){
        busModule.startBtn_on();
    });

    endtBtn_On.addEventListener('click',function(){
        busModule.endBtn_on();
    });

    catagoty_Selection.forEach(btn => btn.addEventListener('click',function(){
        busModule.Catagoty_Selection();
    })); //모듈화 못함. 나중에 희준이에게 물어보기.
});