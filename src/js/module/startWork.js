function clickWrite(single) {
    if (click(id("com.xm.bottle:id/tv_write"))) {
       logd("开始写信")
        if (waiteWrite()) {
            inputDialog(single)
        }
    }else {
        toast("漂流瓶软件官方写信入口页面发生改变，未检测到写信id，联系开发者更新修复")
    }
}
function clickWrite_phone(single) {
    if (click(id("com.xm.bottle:id/tv_write"))) {
        logd("开始写信")
        if (waiteWrite()) {
            inputDialog_phone(single)
        }
    }else {
        toast("漂流瓶软件官方写信入口页面发生改变，未检测到写信id，联系开发者更新修复")
    }
}


function waiteWrite() {
//var waiteDialog = waitExistNode(id("com.xm.bottle:id/dialog_bottle_set_message"),20000);
    var waiteDialog = waitExistNode(text("写信"),20000);
    if (waiteDialog) {
        logd("开始编辑内容")
    }else {
        toast("漂流瓶软件编辑窗体官方页面发生改变，未检测到id，联系开发者更新修复")
    }
    return waiteDialog;
}


function inputDialog(single) {

var inputFlag = imeInputText(id("com.xm.bottle:id/dialog_bottle_set_message"),single+话术后缀);
    if (inputFlag) {
        sleep(1000)
        toast("内容填写成功")
        clickCommit();
    }else {
        var inputFlag = inputText(id("com.xm.bottle:id/dialog_bottle_set_message"),single+话术后缀);
        if (inputFlag) {
            sleep(1000)
            toast("内容填写成功")
            clickCommit();
        }else {

            toast("漂流瓶软件官方输入框页面发生改变，未检测到id，联系开发者更新修复")
        }

    }
}
function inputDialog_phone(single) {

    var inputFlag = inputText(id("com.xm.bottle:id/dialog_bottle_set_message"),single+话术后缀);
    if (inputFlag) {
        sleep(1000)
        toast("内容填写成功")
        clickCommit();
    }else {
        toast("漂流瓶软件官方页面发生改变，未检测到id，联系开发者更新修复")
    }
}
function clickCommit() {
    if (click(id("com.xm.bottle:id/dialog_bottle_set_submit"))) {
        logd("提交成功")
    }else {
        toast("漂流瓶软件官方页面发生改变，未检测到id，联系开发者更新修复")
    }
}

function findBootle_mnq(context) {
    var selector = idMatch(".*com.xm.bottle:id/iv_star_*").getNodeInfo(1000);
    if (null==selector||""==selector) {
        clickRefresh();
    }else {
        toast("检测-->漂流瓶共有"+selector.length+"个")
        for (let single of selector) {
            if (single.click()) {
                sleep(捡瓶子速度*1000)
                reply(context)
            }else {

            }
        }
        /*     for (let single in selector) {
                 sleep(2000)
                 if (click(id("com.xm.bottle:id/iv_star_"+single))) {
                     sleep(1000)
                     reply(context)
                 }else {
                     toast("第"+single+"个漂流瓶id发生变化");
                 }
             }*/
    }


}



function findBottle(context) {

    var selector = idMatch(".*com.xm.bottle:id/iv_star_*").getNodeInfo(1000);
    if (null==selector||""==selector) {
        clickRefresh();
        
    }else {
        logd("检测到漂流瓶共有"+selector.length+"个")
        for (let single of selector) {
            if (single.click()) {
                sleep(捡瓶子速度*1000)
                reply(context)
            }else {

            }
        }   
    }


}

function reply(context) {
    var  selector = id("com.xm.bottle:id/dialog_bottle_get_submit"); ;
    if (click(selector)) {
        if (waitExistNode(id("com.xm.bottle:id/chat_message_input"),20000)) {
            account = getText(id("com.xm.bottle:id/page_title"))
            var t2=file.readAllLines("/sdcard/已发送账号.txt");
            var txt = '.*'+account+'.*';
            var reg = new RegExp(txt)
            if (reg.test(t2)) {
                loge("检测到已发送过"+account+",跳过")
                back()
                sleep(1000)
                flag=1
            }else {
                flag=0
                inputReply(context);
            }

        }else {
            loge("漂流瓶软件官方页面发生改变，未检测到id，联系开发者更新修复")
        }

    }
}

function inputReply(context) {

    var inputFlag = inputText(clz("android.widget.EditText"),捡瓶子的回复+话术后缀);
    if (inputFlag) {
        logd("内容填写成功")
        waitSend();
    }else {
        loge("漂流瓶软件官方页面发生改变，未检测到id，联系开发者更新修复")
    }
}


function waitSend() {
    if (waitExistNode(id("com.xm.bottle:id/send_btn"),5000)) {
        if ( click(id("com.xm.bottle:id/send_btn"))) {
            logd("发送给用户："+account+" 成功")
            file.appendLine(account,"/sdcard/已发送账号.txt")
            sleep(1000)
            back();
        }
    }
}

function clickRefresh() {
    if (click(id("com.xm.bottle:id/tv_refresh"))) {
       logd("刷新成功")
        findBottle();
    }

}

