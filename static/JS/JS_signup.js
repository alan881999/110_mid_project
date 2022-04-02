
function check_info(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);

    user_name=document.getElementById("user_name").value;
    passwd=document.getElementById("passwd").value;
    confirm_passwd=document.getElementById("confirm_passwd").value;

    if(passwd!=confirm_passwd){
        alert("密碼確認不正確");
        return false;
    }
    a_basic = $.ajax({
        url:"/static/information.json",
        type:"GET",
        dataType:"json",
        async:false,
    });
    //取得Json檔
    //將string轉換成Object
    result_park=$.parseJSON(a_basic.responseText)
    
    for(i=0;i<result_park.length;i++){
        if(user_name==result_park[i]["user_id"]){
            alert("此帳號已存在");
            return false;
        }
    }
  
    //build_info=[user_name,passwd,"","",  ""];
    build_info={"user_id": user_name, 
                "user_password": passwd, 
                "user_car": "", 
                "user_select_park": "", 
                "user_park_date": ""}
    

    return true;
}

function go_P1(){

    if(check_info()==true){
        window.location.href="/"+"?user_name="+user_name+"&passwd="+passwd;;
    }else{
        window.location.href="sign_up.html";
    }
}