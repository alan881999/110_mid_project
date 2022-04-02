/*滑鼠移到按鍵上時 改圖片 加上 預約文字*/
function change_map(ele) {
    console.log("/static/picture/map_" + ele.getAttribute('map-name') + ".jpg");
    console.log( ele.innerText);
    document.getElementById("map_picture").src = "/static/picture/map_" + ele.getAttribute('map-name') + ".jpg";
    ele.innerText = "預約 : " + ele.innerText
}
/*滑鼠移開 將預約文字去除*/
function change_text(ele) {
    ele.innerText = ele.innerText.replace("預約 : ","")
}
//跳至填寫預約的畫面
function change_page(ele){
    //取得先前傳入的user_id
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    select_user_id = url.searchParams.get('user_id');
    //將所選的停車場 及 user_id往下傳
    window.location.href="index_P5.html?select="+ ele.getAttribute('map-name') + "&user_id=" + select_user_id;
}
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
