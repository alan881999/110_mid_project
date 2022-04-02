function getselect(){
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    select_page = url.searchParams.get('select');
    if (select_page=="A"){
        document.getElementById("user_select_park").text = "A 光復前門地下停車場";
    }
    else if(select_page=="B"){
        document.getElementById("user_select_park").text = "B 管院地下停車場";
    }
    else if(select_page=="C"){
        document.getElementById("user_select_park").text = "C 雲平地下停車場";
    }
    else if(select_page=="D"){
        document.getElementById("user_select_park").text = "D 修齊地下停車場";
    }
    else if(select_page=="E"){
        document.getElementById("user_select_park").text = "E 都計地下停車場";
    }
    else if(select_page=="F"){
        document.getElementById("user_select_park").text = "F 成功前門地下停車場";
    }
    else if(select_page=="G"){
        document.getElementById("user_select_park").text = "G 三系館地下停車場";
    }
    else if(select_page=="H"){
        document.getElementById("user_select_park").text = "H 奇美樓地下停車場";
    }
    else if(select_page=="I"){
        document.getElementById("user_select_park").text = "I 生科大樓地下停車場";
    }
    else if(select_page=="J"){
        document.getElementById("user_select_park").text = "J 理學大樓地下停車場";
    }
    else if(select_page=="1"){
        document.getElementById("user_select_park").text = "1 管院平面";
    }
    else if(select_page=="2"){
        document.getElementById("user_select_park").text = "2 雲平平面";
    }
    else if(select_page=="3"){
        document.getElementById("user_select_park").text = "3 新園平面";
    }
    else if(select_page=="4"){
        document.getElementById("user_select_park").text = "4 土木及水利平面";
    }
    else if(select_page=="5"){
        document.getElementById("user_select_park").text = "5 自強平面";
    }
    else if(select_page=="6"){
        document.getElementById("user_select_park").text = "6 勝後平面";
    }
    else if(select_page=="7"){
        document.getElementById("user_select_park").text = "7 力行平面";
    }
    else if(select_page=="8"){
        document.getElementById("user_select_park").text = "8 成杏平面";
    }     
}
//按下 送出預約
function book_park(){
    //取得先前傳入的user_id
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
    check_user_exist = 0 //確認使用者是否存在 若不存在 則 跳出警示 "請重新登入"
    json_number = 0 //存在目前使用者在json檔案中是在哪一個
    //若存在 則在確定是否定位
    //若不存在定位 則可以繼續
    //若存在定位 則顯示 請取消先前定位之資料
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
    //若使用者存在 確認是否填寫過資料
    else if(result_park[json_number]["user_select_park"]!=""){
        alert("請先取消先前預約 在做新的預約");
    }
    //檢查車排是否填寫
    else if (document.getElementById("user_car").value == ""){
        alert("請填寫車牌號碼");
    } 
    //都成功填寫 先確認是否有車位 
    //沒有車位 : 警示沒有車位
    //有車位 : 儲存預約結果到information.json 並更新 park_information.json 
    //結束後轉跳到預約成功之頁面
    else{
        console.log(select_user_id)
        //取的所填寫之車牌
        console.log(document.getElementById("user_car").value)
        //取得所填寫之停車場    
        console.log(document.getElementById("select_select").value)
        //取得所填寫之時間日期
        console.log(document.getElementById("user_park_date").value)
        /********************讀取 停車場剩餘車位之JSON檔*****************/
        //讀取json檔案
        a_park = $.ajax({
            url:"/static/park_information.json",
            type:"GET",
            dataType:"json",
            async:false,
        });
        //取得Json檔
        //將string轉換成Object
        result_park=$.parseJSON(a_park.responseText)
        /**************************************************************/
        //根據所選停車場 取得剩下車位
        console.log(result_park[(document.getElementById("select_select").value)[0]])
        var select_park_number = result_park[(document.getElementById("select_select").value)[0]]
        var remain_select_park = result_park[(document.getElementById("select_select").value)[0]]
        //若停車位不足
        if (remain_select_park <= 0 ){
            alert("所剩下停車位不足 請重新選擇")
        }
        //若足夠
        else{
            window.location.href="index_P6_ok.html?select=" + (document.getElementById("select_select").value)[0] 
                + "&car=" +  (document.getElementById("user_car").value) 
                + "&park_date=" + document.getElementById("user_park_date").value
                + "&user_id=" + select_user_id
            }
        }
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