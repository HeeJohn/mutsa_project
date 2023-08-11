// export {
//     page_default,
//     dis_page_2,
//     dis_page_3,
//     dis_page_4,
//     dis_page_5,
//     get_Page_Id,
//     goBack,
//     focus,
// };
// export {
// }




/*=============================== Timer =================================*/
function displayClock(targetId) {  //시계함수 
    let target = document.getElementById(targetId);

    function updateClock() {
        let time = new Date();

        let month = time.getMonth();
        let date = time.getDate();
        let day = time.getDay();
        let week = ['일', '월', '화', '수', '목', '금', '토'];

        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        target.innerText = 
        `${month + 1}월 ${date}일 (${week[day]}) ` +
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}
/*=============================== Timer =================================*/

/*=============================== Page_switch =================================*/
window.onload=function page_default() { /*페이지 로드시 동작하는 함수*/
    document.getElementById("page_1").style.display = "flex";
    document.getElementById("page_2").style.display = "none";
    document.getElementById("page_3").style.display = "none";
    document.getElementById("page_4").style.display = "none";
    document.getElementById("page_5").style.display = "none";
    displayClock("page_1_time");
}

function dis_page_2() {
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "flex";
    document.getElementById("page_3").style.display = "none";
    document.getElementById("page_4").style.display = "none";
    document.getElementById("page_5").style.display = "none";
}

function dis_page_3() {
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "none";
    document.getElementById("page_3").style.display = "flex";
    document.getElementById("page_4").style.display = "none";
    document.getElementById("page_5").style.display = "none";
    displayClock("page_3_date_section");
}

function dis_page_4() {
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "none";
    document.getElementById("page_3").style.display = "none";
    document.getElementById("page_4").style.display = "flex";
    document.getElementById("page_5").style.display = "none";
}

function dis_page_5() {
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "none";
    document.getElementById("page_3").style.display = "none";
    document.getElementById("page_4").style.display = "none";
    document.getElementById("page_5").style.display = "flex";
}

function get_Page_Id() { //현재 페이지 아이디 가져오는 함수.
    var pages = ["page_1", "page_2", "page_3", "page_4", "page_5"];
    for (var i = 0; i < pages.length; i++) {
      if (document.getElementById(pages[i]).style.display === "flex") {
        return pages[i];
      }
    }
    return null; // 현재 페이지를 찾을 수 없는 경우
}

function goBack() {
    // 현재 페이지의 ID를 가져옴
    var currentPageId = get_Page_Id();
  
    switch (currentPageId) {
      case "page_2":
        // page_2에서는 page_1로 이동
        document.getElementById("page_1").style.display = "flex";
        document.getElementById("page_2").style.display = "none";
        break;
      case "page_3":
        // page_3에서는 page_2로 이동
        document.getElementById("page_2").style.display = "flex";
        document.getElementById("page_3").style.display = "none";
        break;
      case "page_4":
        // page_4에서는 page_3로 이동
        document.getElementById("page_3").style.display = "flex";
        document.getElementById("page_4").style.display = "none";
        break;
      case "page_5":
        // page_5에서는 page_4로 이동
        document.getElementById("page_4").style.display = "flex";
        document.getElementById("page_5").style.display = "none";
        break;
    }
  }

/*=============================== Page_switch =================================*/

/*=============================== Page_2 script =================================*/
let start_btn = document.getElementById('start_btn');
let end_btn = document.getElementById('end_btn');
let start_text = document.getElementById('start_text');
let end_text = document.getElementById('end_text');

function focus(){
    start_btn.style.borderColor = 'gray';
    end_btn.style.borderColor = '#ABCBA4';
    start_text.style.backgroundColor = 'gray';
    end_text.style.backgroundColor = '#ABCBA4';
}
/*=============================== Page_2 script =================================*/
