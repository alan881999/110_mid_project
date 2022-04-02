//查看所所填入之資料
function go_form(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    user_id = url.searchParams.get('user_id');
    window.location.href="index_form.html?user_id=" + user_id
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