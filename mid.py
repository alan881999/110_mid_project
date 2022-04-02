import re
from select import select
from urllib.request import parse_keqv_list
from flask import Flask,render_template,request
import pymysql
import json
from decimal import *
from flask import Markup

app=Flask(__name__)
##### 登入頁面 P1
@app.route('/')
def index_P1():
    return render_template('index_P1.html')

##### 選擇功能頁面 P2
@app.route('/index_P2.html')
def index_P2():
    return render_template('index_P2.html')

##### 顯示當前停車位 P3
@app.route('/index_P3.html')
def index_P3():
    return render_template('index_P3.html')

##### 選擇停車場頁面 P4
@app.route('/index_P4.html')
def index():
    now_user_id = "q56101028"
    return render_template('index_P4.html')

##### 目前所填/已填資料
@app.route('/index_form.html')
def index_form():
    return render_template('index_form.html')


##### 預約停車場頁面 P5
@app.route("/index_P5.html", methods=['GET'])
def index_P5():
    print("go_index_p5")
    return render_template('index_P5.html')

##### 預約完成頁面 / 順便寫檔 P6
@app.route('/index_P6_ok.html', methods=['GET'])
def change_json():
    print("change_json")
    car = request.args.get('car')##所填車牌
    select = request.args.get('select')##所選停車場
    park_date = request.args.get('park_date')##所選時間
    user_id = request.args.get('user_id')##所登入帳號
    #################更改所剩下停車位
    ###讀JSON檔
    with open("static/park_information.json","r") as load_f:
        data = json.load(load_f)
        now_select = int(data[select])-1##少一個車位
    ###寫SJSON檔
    with open("static/park_information.json","w") as f:
        data[select] = str(now_select)
        json.dump(data, f,ensure_ascii=False)##寫回JSON
    #################更改基本資料
    with open("static/information.json","r") as load_f:
        data_inf = json.load(load_f)
    for i in range(0,len(data_inf)):
        if data_inf[i]["user_id"] == user_id:
            data_inf[i]["user_car"] = car
            data_inf[i]["user_select_park"] = select
            data_inf[i]["user_park_date"] = park_date
            break
    ###寫SJSON檔
    with open("static/information.json","w") as f:
        json.dump(data_inf, f,ensure_ascii=False)##寫回JSON
    #################
    return render_template('index_P6_ok.html')##跳到預約完成
    
if __name__ == '__main__':
	app.run(host='0.0.0.0',port='5000',debug=True)

