//查看所所填入之資料
function go_P2(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    user_id = url.searchParams.get('user_id');
    window.location.href="index_P2.html?user_id=" + user_id
}
//查看 停車場所剩下之資料
function go_P3(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    user_id = url.searchParams.get('user_id');
    window.location.href="index_P3.html?user_id=" + user_id
}
//預約停車場
function go_P4(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    user_id = url.searchParams.get('user_id');
    window.location.href="index_P4.html?user_id=" + user_id
}
//載入個人所填寫之資料
window.onload = function(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    select_user_id = url.searchParams.get('user_id');
    //檢查是否有填寫過停車位
    //如果沒有 則在mid.py填寫
    //如果有 則警示 "請先取消停車位"
    a_basic = $.ajax({
            url:"/static/information.json",
            type:"GET",
            dataType:"json",
            async:false,
        });
    //取得Json檔
    //將string轉換成Object
    result_park=$.parseJSON(a_basic.responseText)
    console.log(result_park)
    check_user_exist = 0 //帳號密碼正確
    for(i=0;i<result_park.length;i++){
        if(select_user_id == result_park[i]["user_id"]){
            //若已經有寫過資料
            check_user_exist = 1
            json_number = i
        }
    }
    if (check_user_exist == 0){ //使用者不存在
        alert("請重新登入");
    }
    //將使用者所填入資料放入 顯示表單
    console.log(result_park[json_number]["user_select_park"])
    document.getElementById("name_get").innerHTML = String(result_park[json_number]["user_id"])
    document.getElementById("password_get").innerHTML = String(result_park[json_number]["user_password"])
    document.getElementById("car_get").innerHTML = String(result_park[json_number]["user_car"])
    document.getElementById("park_get").innerHTML = String(result_park[json_number]["user_select_park"])
    document.getElementById("date_get").innerHTML = String(result_park[json_number]["user_park_date"])
}
//取消預約停車位
function cancel_book(){
    
}