function go_sign_up(){
 
    window.location.href="sign_up.html"
}


function go_P2(){
    //先從 information.json裡免找 是否有使用者
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    select_user_id = document.getElementById("floatingInput").value;
    select_user_password = document.getElementById("floatingPassword").value;
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
    //確認帳號密碼是否正確
    for(i=0;i<result_park.length;i++){
        if(select_user_id == result_park[i]["user_id"]){
        if(select_user_password == result_park[i]["user_password"]){
            //帳號密碼正確
            check_user_exist = 1
        }
        }
    }
    //若不存在使用者 則警示 重新登入
    if (check_user_exist == 0){ //使用者不存在
        alert("帳號密碼不存在或不正確 請重新輸入");
    }
    //若存在使用者 則登入
    else{
    window.location.href="index_P2.html?user_id=" + document.getElementById("floatingInput").value
    }
}
