export {
    page_default,
    dis_page_2,
    dis_page_3,
    dis_page_4,
    dis_page_5,
    goBack,
    
};
export {
}




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
function page_default() { /*페이지 로드시 동작하는 함수*/
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

function goBack() { //현재 페이지 아이디 가져오는 함수.
  let pageSize =5;
  
    for (var i = 1; i <= pageSize; i++) {
      if (document.getElementById('page_'+i).style.display === "flex") {
        document.getElementById('page_'+(i-1)).style.display = "flex";
        document.getElementById('page_'+i).style.display = "none";
      }
    }
}

/*=============================== Page_switch =================================*/

/*=============================== Page_2 script =================================*/
// 출발지 도착지 색상변경.
document.addEventListener("DOMContentLoaded", function() {
  let startBtn = document.getElementById("start_btn");
  let endBtn = document.getElementById("end_btn");
  let startText = document.getElementById("start_text");
  let endText = document.getElementById("end_text");


  startBtn.addEventListener("click", function() {
      startBtn.style.borderColor= "#ABCBA4";
      startText.style.backgroundColor= "#ABCBA4";
      endBtn.style.borderColor= "gray";
      endText.style.backgroundColor= "gray";
  });

  endBtn.addEventListener("click", function() {
      endBtn.style.borderColor= "#ABCBA4";
      endText.style.backgroundColor= "#ABCBA4";
      startBtn.style.borderColor= "gray";
      startText.style.backgroundColor= "gray";
  });
});

// 출발지 도착지 id 넣기
/*=============================== Page_2 script =================================*/