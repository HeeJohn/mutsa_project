
/*----------------------- preset ------------------------*/
var sec= 1000;
var min= sec*60;

function herf_home() {
    location.href = "/caffe_order/kiosk/simulation/simulator.html";
}
function start_btn() {
    document.getElementById("mega_start_img").style.display = 'none';
    document.getElementById("mega_start_btn").style.display = 'none';
    document.getElementById("mega_order").style.display = 'block';
    document.getElementById("mega_menu_table").style.display = 'block';
    document.getElementById("nextpage").style.display = 'flex';
    document.getElementById("pay").style.display = 'flex';
    hide_order_list();
    timer_start();
    setTimeout(invalid, min);
}

/*----------------------- timer ------------------------*/

function timer_start(){
    var time = 60;
    var timer = document.getElementById("rest_time");
  
    return setInterval(() => {
        timer.innerHTML = "남은 시간<br>"+time--+"초";
    }, sec);
}
function invalid(){
    location.href = "/caffe_order/kiosk/simulation/simulator.html";
    clearInterval(timer_start);
}
/*----------------------- timer ------------------------*/

function hide_order_list() {
    var lists = document.getElementsByClassName("cart");
        for(var list of lists)
            list.style.display= 'none';
}

function all_menu_none() {
    document.getElementById("추천_음료").style.display = 'none';
    document.getElementById("추천_디저트").style.display = 'none';
    document.getElementById("커피_HOT").style.display = 'none';
    document.getElementById("커피_ICE").style.display = 'none';
    document.getElementById("스무디_프라페").style.display = 'none';
    document.getElementById("에이드_주스").style.display = 'none';
    document.getElementById("Tea").style.display = 'none';
    document.getElementById("커피_콜드브루").style.display = 'none';
    document.getElementById("Beverage").style.display = 'none';
    document.getElementById("디저트").style.display = 'none';
}
/*----------------------- preset ------------------------*/


/*----------------------- menu_browsing ------------------------*/
var menu_list = ["추천_음료"];

function open_menu_table(id) {
    all_menu_none();
    document.getElementById(id).style.display = 'block';
}

var menu_bar_page = 1;

function turn_menu_page(btn) {
    var current_page_id = "mega_menu_";
    if (btn == "menu_bar_right") {
        if (menu_bar_page != 3) {
            var past = document.getElementsByClassName(current_page_id + menu_bar_page);
            for(var menu of past)
                menu.style.display = "none";

            menu_bar_page += 1;f 

            all_menu_none();
            if(menu_bar_page == 3) 
                document.getElementById("Beverage").style.display = 'block';
            if(menu_bar_page == 2) 
                document.getElementById("스무디_프라페").style.display = 'block';
    
        }
        var menus = document.getElementsByClassName(current_page_id + menu_bar_page);
        for(var menu of menus)
            menu.style.display = 'block';
    }

    if (btn == "menu_bar_left") {
        if (menu_bar_page != 1) {
            var past = document.getElementsByClassName(current_page_id + menu_bar_page);
            for(var menu of past)
                menu.style.display = "none";

            menu_bar_page -= 1;

            all_menu_none();
            if(menu_bar_page == 2) 
                document.getElementById("커피_콜드브루").style.display = 'block';
            if(menu_bar_page == 1) 
                document.getElementById("커피_ICE").style.display = 'block';
        }

        var menus = document.getElementsByClassName(current_page_id + menu_bar_page);
        for(var menu of menus)
            menu.style.display = 'block';
    }
}
/*----------------------- menu_browsing ------------------------*/


/*---------------- pick items /count & coloring ------------------*/

function itemGet(name, price) {
    this.name = name;
    this.number = 0;
    this.price = parseInt(price);
}

var order_list = [];
var colorCount =1;
var missionSucced = false;

function option(id,price) {

    var drink = document.getElementById(id);
    var order = new itemGet(id, price);
    var found = false;
    order.number +=1;

    var mission= document.getElementById('mega_top_bar_name');
    switch(mission.innerText)
    {
        case '아이스 아메리카노' :  mission = document.getElementById('ice_아메리카노'); break;
        case '뜨거운 카페 라떼' :  mission = document.getElementById('hot_카페라떼'); break;
    }

    if(id == mission.id)
        missionSucced =true;

    for(var i in order_list)
    {     
        if (order.name == order_list[i].name) {
                order_list[i].number += 1;
                found= true;
                break;
            }
    }
    if(!found){
        if(colorCount>7){
            maxItems();
            return;
        }
        colorCount++;
        drink.style.borderStyle = 'solid';
        drink.style.borderColor = 'red';
        order_list.push(order);
    }

    open_order_list(order_list);
}

function maxItems() {
    alert("7개 이상의 아이템을 선택하셨습니다. 추가 선택이 불가합니다.");
}
/*---------------- pick items /count & coloring ------------------*/

function del_item(item,price) {
    var target = document.getElementById(item);
    var val =document.getElementById(price);
    open_order_list(order_list);
}
function add_item(item,price){
    var target = document.getElementById(item).innerHTML;
    var val =document.getElementById(price).innerText;
    option(target,val);
    open_order_list(order_list);
}

/*order_list에 표시하기*/
var total_list= [0, 0];
function open_order_list(order_list) {
    var total_num = 0;
    var total_price = 0;

    for (i = 0; i < order_list.length; i++) {
        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'flex';

        document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
        document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
        
        total_num += order_list[i].number;
        total_price += (order_list[i].price)*(order_list[i].number);
    }
    document.getElementById("item_number").innerHTML= "__________________<br>선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price)+"원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;
}

/*전체 삭제 창
function 전체삭제() {
    alert(order_list.length);
    for(i=0; i< order_list.length; i++) {

        var order_id = "order_" + (i + 1);
        document.getElementById(order_id).style.display = 'none';
        order_list.pop();
    }
    open_order_list(order_list);
}
 */

/*---------------- payment window ------------------*/
function open_window_pay () {

    document.getElementById("window_pay").style.display = 'block';
    document.getElementById("screen_to_window_pay").style.display  = 'block';
    write_order_list_window_pay(order_list);
    
    document.getElementById("w_total_number").innerText = total_list[0];
    document.getElementById("w_total_price").innerText =total_list[1];
    
    document.getElementById("돌아가기").style.display = 'block';
    document.getElementById("먹고가기").style.display = 'block';
    document.getElementById("가져가기").style.display = 'block';

    document.getElementById("돌아가기_2").style.display = 'none';
    document.getElementById("쿠폰사용").style.display = 'none';
    document.getElementById("페이코").style.display = 'none';
    document.getElementById("카드결제").style.display = 'none';
    

}

function close_window_pay () {
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display  = 'none';
}

function write_order_list_window_pay (order_list) {
    for (i=0; i<order_list.length; i++) {
        var window_id = "window_" + (i+1);
        document.getElementById(window_id).style.display = 'flex';
        document.getElementById("w_order_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("w_number_" + (i + 1)).innerText = (order_list[i].number) + "개 " + (order_list[i].price) * (order_list[i].number) + "원";
    }
}

function change_window_btn() {
    document.getElementById("돌아가기").style.display = 'none';
    document.getElementById("먹고가기").style.display = 'none';
    document.getElementById("가져가기").style.display = 'none';

    document.getElementById("돌아가기_2").style.display = 'block';
    document.getElementById("쿠폰사용").style.display = 'block';
    document.getElementById("페이코").style.display = 'block';
    document.getElementById("카드결제").style.display = 'block';
    
}

function back_2_window_btn() {
    document.getElementById("돌아가기").style.display = 'block';
    document.getElementById("먹고가기").style.display = 'block';
    document.getElementById("가져가기").style.display = 'block';

    document.getElementById("돌아가기_2").style.display = 'none';
    document.getElementById("쿠폰사용").style.display = 'none';
    document.getElementById("페이코").style.display = 'none';
    document.getElementById("카드결제").style.display = 'none';
}

function open_w_카드결제() {
    document.getElementById("w_카드결제").style.display = 'block';
    document.getElementById("window_pay").style.display = 'none';
    document.getElementById("w_카드결제_total_price").innerText = total_list[1]+"원";

    document.getElementById("insert_card_moving").style.display='block';
    
}

function close_w_카드결제() {
    document.getElementById("w_카드결제").style.display = 'none';
    document.getElementById("screen_to_window_pay").style.display = 'none';
    document.getElementById("insert_card_moving").style.display = 'none';

}

/*---------------- payment window ------------------*/


/*---------------- finish ------------------*/
function 결제완료() {
    alert("감사합니다. 결제가 완료되었습니다. 교환권과 카드를 챙겨가세요.");
    location.href = "/caffe_order/kiosk/simulation/simulator.html";
}


function 결제완료_item(item) {
    if(missionSucced == true) {
    alert("축하합니다. " + item +" 주문하기 성공!");
    location.href = "/caffe_order/kiosk/practice/americano/americano_mission.html";
    }
    else {
        alert( item + " 주문하기 실패! 다시 도전해보세요.");
        location.href = "/caffe_order/kiosk/practice/americano/americano_mission.html";
    }
}

/*---------------- finish ------------------*/
