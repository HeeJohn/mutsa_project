function displayClock(targetId) {  //시계함수 - 아이디만 넣으면 동작가능
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