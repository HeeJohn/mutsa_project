export {
    page_default,
    dis_page_2,
    dis_page_3,
    dis_page_4,
    dis_page_5,
    goBack,
    startBtn_on,
    endBtn_on,
    load_start_end,
    page_3_default,
    Catagoty_Selection,
};
export {
}


let finalStart; // 결제창에서 불러올 출발지
let finalEnd; // 결제창에서 불러올 도착지

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
    let 전체버튼 = document.getElementById("전체_");
    document.getElementById("page_1").style.display = "none";
    document.getElementById("page_2").style.display = "flex";
    전체버튼.focus();
    load_start_end();
}

function dis_page_3() {
    document.getElementById("page_2").style.display = "none";
    document.getElementById("page_3").style.display = "flex";
    displayClock("page_3_date_section");
    page_3_default();
}

function dis_page_4() {
    document.getElementById("page_3").style.display = "none";
    document.getElementById("page_4").style.display = "flex";
}

function dis_page_5() {
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
//page_2 초기값
// function page_2_default() {
//     let high_list_default = document.getElementById("서울");


// }
// document.addEventListener('DOMContentLoaded', function() {
//     var seoulButton = document.getElementById('서울');
  
//     seoulButton.style.backgroundColor = '#ABCBA4'; // 배경색 변경
//     seoulButton.style.outline = 'none'; // 포커스 표시 해제
//   });



// 출발지 도착지 색상변경.
function endBtn_on(){
    let startBtn = document.getElementById("start_btn");
    let endBtn = document.getElementById("end_btn");
    let startText = document.getElementById("start_text");
    let endText = document.getElementById("end_text");

    endBtn.style.borderColor= "#6D9668";
    endText.style.backgroundColor= "#ABCBA4";
    startBtn.style.borderColor= "rgb(165, 165, 165)";
    startText.style.backgroundColor= "rgb(165, 165, 165)";
    startBtn.value = "false";
}

function startBtn_on(){
    let startBtn = document.getElementById("start_btn");
    let endBtn = document.getElementById("end_btn");
    let startText = document.getElementById("start_text");
    let endText = document.getElementById("end_text");

    startBtn.style.borderColor= "#6D9668";
    startText.style.backgroundColor= "#ABCBA4";
    endBtn.style.borderColor= "rgb(165, 165, 165)";
    endText.style.backgroundColor= "rgb(165, 165, 165)";
    startBtn.value = "true";
}

// 텍스트 가져오기
function load_start_end(){
    const startButton = document.getElementById('start_btn'); //활성화 유무를 구분하기 위한 변수

    const startResultDiv = document.getElementById('start_result'); // 표시할 div
    const endResultDiv = document.getElementById('end_result'); // 표시할 div

    const buttons = document.querySelectorAll('.city');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent; // 버튼의 텍스트 내용 가져오기
                if (startButton.getAttribute('value') === 'true') {
                    startResultDiv.textContent = buttonText; // 출발지 설정
                    finalStart = buttonText; // 결제창에서 불러올 출발지
                    endBtn_on();
                    endResultDiv.textContent = "도착지를 선택해주세요.";

                } else if (startButton.getAttribute('value') === 'false' && buttonText !== startResultDiv.textContent) {
                    endResultDiv.textContent = buttonText; // 도착지 설정
                    finalEnd = buttonText; // 결제창에서 불러올 도착지
                    setTimeout(() => {
                        dis_page_3();
                      }, 1000);
                }
            });
        });
}

//카테고리 선택
function Catagoty_Selection(){
    const high_list_select = document.querySelectorAll('.province');
    const low_list_select = document.querySelectorAll('.low_list');

    let prevIndex = 0; // 초기에 첫 번째 요소가 보이도록 설정

    low_list_select[prevIndex].style.display = 'flex'; // 초기에 첫 번째 요소를 보이도록 설정

    high_list_select.forEach((element, index) => {
        element.addEventListener('click', () => {

            high_list_select[prevIndex].style.backgroundColor = ''; // 다시 초기화
            
            low_list_select[prevIndex].style.display = 'none';
            
            element.style.backgroundColor = '#ABCBA4'; // 색상변경
            
            low_list_select[index].style.display = 'flex';
            
            prevIndex = index;
        });
    });
}
/*=============================== Page_2 script =================================*/

/*=============================== Page_3 script =================================*/
function page_3_default() {
    const startResult = document.getElementById('page_3_start_result'); // 표시할 div
    const endResult = document.getElementById('page_3_end_result'); // 표시할 div

    startResult.textContent = finalStart;
    endResult.textContent = finalEnd;
}
/*=============================== Page_3 script =================================*/
