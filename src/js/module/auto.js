function getMsg() {

    toast("收到消息"+getText(id("com.xm.bottle:id/conversation_unread")));
}

function waitMsg() {
    if (waitExistNode(text("查找"),50000)) {
       while (true){
           sleep(parseInt(自动聊天的回复速度)*1000)

          var msg= id("com.xm.bottle:id/conversation_unread").getOneNodeInfo(2000)

           if (null==msg) {
               toast("未收到新消息");
              // upOrDown()
              // upOrDown()

            break
           }
    try {
        var username = msg.parent().child(0).text
        var usermagtime = msg.parent().child(1).text
        var usermsg = msg.parent().child(2).text
        toast("收到信息来自:"+username+"---- 接受时间："+usermagtime+"---- 内容："+usermsg);
        if ( clickRandomRect(msg.parent().bounds)) {
            getAiMsg(usermsg)
            //inputMsg()
        }
    }catch (e) {
        waitMsg()
    }


       }
    }
}

function waitMsg_local() {
    if (waitExistNode(text("查找"),50000)) {
        while (true){
            sleep(5000)
            var msg= id("com.xm.bottle:id/conversation_unread").getOneNodeInfo(2000)
            if (null==msg) {
                toast("未收到新消息");
               // upOrDown()
                break
            }

       try {
           var username = msg.parent().child(0).text
           var usermagtime = msg.parent().child(1).text
           var usermsg = msg.parent().child(2).text
           toast("收到信息来自:"+username+"---- 接受时间："+usermagtime+"---- 内容："+usermsg);
           if ( clickRandomRect(msg.parent().bounds)) {
               getMsgFromLocal(usermsg)
               //inputMsg()
           }
       }catch (e) {
           waitMsg_local()
       }

        }
    }
}
function inputMsg(reply) {
    随机()
    sleep(parseInt(自动聊天的回复速度)*1000)
    logd("replay"+reply)
    if (inputText(id("com.xm.bottle:id/chat_message_input"),reply+话术后缀)) {
        waitSend()
    }
}

function waitSend() {
    if (waitExistNode(id("com.xm.bottle:id/send_btn"),5000)) {
        if ( click(id("com.xm.bottle:id/send_btn"))) {
            sleep(1000)
            toast("回复成功");
            back();
        }
    }
}

function getAiMsg(msg) {
    sleep(parseInt(自动聊天的回复速度)*1000)
    var url = "http://api.qingyunke.com/api.php?key=free&appid=0&msg="+msg;
    var x = http.httpGetDefault(url, 10 * 1000, {"User-Agent": "test"});
    if (null!=x) {
        d =JSON.parse(x);
        toast("回复："+d.content);
        if (d.result==0) {
            inputMsg(d.content+话术后缀)
        }
    }
    loge("result ->     " + x);
}

function getMsgFromLocal(key) {
    var t=file.exists("/sdcard/话术库.txt");
    if (t) {
        toast("检测到本地存在话术库")
        匹配话术(key)
    }else {
        toast("检测到本地不存在话术库或话术库路径异常，请检查")
    }

}


function 匹配话术(key) {
    var t2=file.readAllLines("/sdcard/话术库.txt");


 /*   let arrays= new Array();
    arrays = t2.split(",")*/
/* var list= new Array() ;
    for (let single of t2){
        var newList = new Array();
        newList = single.split("----")
        var txtt = '.*'+newList[1]+'.*';
        var reg = new RegExp(txtt)
        if (reg.test(key)) {
            list.push(newList)
          /!*  var str = newList[1]*!/
            var txt = newList[2]+话术后缀;
            logd("匹配话术"+txt)
            inputMsg(txt)
            return newList[2]
        }else {
            logd("未匹配到")
            if (key=="[图片]") {
                inputMsg(收到图片通用回复+话术后缀)
            }else {
                inputMsg(自动聊天的全局回复+话术后缀)
            }

        }
    }*/
    for (let single in t2){
        var newList = new Array();
        var t23=file.readLine("/sdcard/话术库.txt",parseInt(single)+1);
        logd(t23)
        newList = t23.split("----")
        var txtt = '.*'+newList[1]+'.*';
        var reg = new RegExp(txtt)
        if (reg.test(key)) {
           /* list.push(newList)*/
            var txt = newList[2]+话术后缀;
            logd("匹配话术"+txt)
            inputMsg(txt)
            return newList[2]
        }else {
            logd("未匹配到")
            if (key=="[图片]") {
                inputMsg(收到图片通用回复+话术后缀)
            }else {
                if (single!=t2.length-1) {
                    logd("未匹配到")
                    continue
                }else {
                    inputMsg(自动聊天的全局回复+话术后缀)
                }

            }
            }

        }
}

function getExecStrs (str) {
/*    var txt = '.*'+key+'.*';*/
    var reg = new RegExp("e","g")
    var list = []
    var result = null
    do {
        result = reg.exec(str)
        result && list.push(result[1])
    } while (result)
    return list
}

