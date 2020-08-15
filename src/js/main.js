/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */
let account="测试";
let flag=0;
let 捡瓶子的回复="嘻嘻"
let 捡瓶子的运行时长="10"

let 自动聊天的回复速度="3"
let 自动聊天的运行时长="10"
let 自动聊天的全局回复="哈哈"
let 收到图片通用回复="额"

let 捡瓶子速度="10"
let 扔瓶子速度="10"
let 话术后缀=""

let 后缀下标集合= new Array();
main();

function main() {

    toast("Hello World");
    let mark = readConfigString("mark")
    let sp = readConfigString("model")

    let 捡瓶子回复 =readConfigBoolean("diyReplayOrNot")
    let 捡瓶子回复内容 =readConfigString("mark2")

    let 捡瓶子时长 =readConfigBoolean("btimerOrNot")
    let 捡瓶子时长值 =readConfigString("btimerValue")

    let 自动聊天回复速度 =readConfigBoolean("replayOrNot")
    let 自动聊天回复速度值 =readConfigString("replayValue")

    let 自动聊天时长 =readConfigBoolean("timerOrNot")
    let 自动聊天回复时长值 =readConfigString("timerValue")

    let 自动聊天全局回复 =readConfigBoolean("autoReplayOrNot")
    let 自动聊天全局回复值 =readConfigString("autoReplayValue")

    let 自动聊天图片回复 = readConfigBoolean("PicReplayOrNot")
    let 自动聊天图片回复值 = readConfigString("picautoReplayValue")

    let 自定义扔瓶子速度 =readConfigBoolean("giveUpOrNot")
    let 自定义扔瓶子速度值= readConfigString("giveUpValue")

    let 自定义捡瓶子速度 =readConfigBoolean("getOrNot")
    let 自定义捡瓶子速度值= readConfigString("getValue")

    let 全局话术后缀 =readConfigBoolean("diyAfter")
    let 全局话术后缀值= readConfigString("after")

    if (捡瓶子回复) {
        捡瓶子的回复=捡瓶子回复内容
        toast("开启自定义捡瓶子回复");
    }
    if (捡瓶子时长) {
        捡瓶子的运行时长=捡瓶子时长值
        toast("开启自定义捡瓶子时长");
    }
    if (自动聊天回复速度) {
        自动聊天的回复速度=自动聊天回复速度值
        toast("开启自定义自动聊天回复速度");
    }

    if (自动聊天时长) {
        自动聊天的运行时长=自动聊天回复时长值
        toast("开启自定义自动聊天的运行时长");
    }

    if (自动聊天全局回复) {
        自动聊天的全局回复=自动聊天全局回复值
        toast("开启自定义自动聊天全局回复");
    }
    if (自动聊天图片回复) {
        收到图片通用回复=自动聊天图片回复值
        toast("开启自定义自动聊天图片回复");
    }
    if (自定义扔瓶子速度) {
        扔瓶子速度=自定义扔瓶子速度值
    }

    if (自定义捡瓶子速度) {
        捡瓶子速度=自定义捡瓶子速度值
    }
    if (全局话术后缀) {

            后缀下标集合 = 全局话术后缀值.split("----")

    }

    logd(sp)
    let marks= new Array();
      marks = mark.split("\n")
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")

    if ("扔瓶子"==sp) {
        toast("开始扔瓶子");
        扔瓶子()
    }else if ("捡瓶子手机版"==sp) {
        var t=file.exists("/sdcard/已发送账号.txt");
        if (t) {
            logd("脚本运行文本库齐全")
        }else {
            var create=file.create("/sdcard/已发送账号.txt");
            if (create) {
                loge("已创建已发送账号文本库")
            }else {
                logd("文本库创建失败或已存在")
            }
        }

        捡瓶子手机版(捡瓶子的回复+话术后缀)
    }else if ("捡瓶子模拟器版"==sp) {
        var t=file.exists("/sdcard/已发送账号.txt");
        if (t) {
            logd("脚本运行文本库齐全")
        }else {
            var create=file.create("/sdcard/已发送账号.txt");
            if (create) {
                loge("已创建已发送账号文本库")
            }else {
                logd("文本库创建失败或已存在")
            }
        }
        toast("开始捡瓶子模拟器版");

        捡瓶子模拟器版(捡瓶子的回复+话术后缀)
    }else if ("网络自动聊天"==sp) {
        toast("开始网络自动聊天");
        自动聊天()
    }else if("文本库自动聊天"==sp){
        toast("开始文本库自动聊天");
        sleep(3000)
        文本库聊天()
    }else if ("扔->捡->聊"==sp) {
        扔捡聊(捡瓶子的回复+话术后缀)
    }else if ("捡->聊"==sp) {


        捡聊(捡瓶子的回复+话术后缀)
    }
}

function 扔捡聊(txt) {
/*
        扔瓶子()
        捡瓶子手机版(txt)
        var t=setTimeout(function() {
            去消息列表()
            sleep(1000)
            文本库聊天()
            var t2=setTimeout(function() {
                去漂流瓶()
                sleep(1000)
                扔捡聊(txt)
            },parseInt(自动聊天的运行时长)*1000);
        },parseInt(捡瓶子的运行时长)*1000);*/


    while (true){
        扔瓶子()
        sleep(1000);
        var tid =thread.execAsync(function() {
            while (true){
                logd("捡瓶子");
                捡瓶子手机版(txt)
                sleep(1000);
                if(thread.isCancelled(tid)){
                    break;
                }
            }
        });
        logd("捡瓶子线程id "+tid);
        //取消捡瓶子线程
        sleep(parseInt(捡瓶子的运行时长)*60*1000);
        logd("取消捡瓶子线程");
        thread.cancelThread(tid);
        去消息列表()
        var tid2 =thread.execAsync(function() {
            while (true){
                文本库聊天()
                sleep(1000);
                if(thread.isCancelled(tid2)){
                    break;
                }
            }
        });
        logd("文本库聊天线程id"+tid2);
        //取消自动聊天线程
        sleep(parseInt(自动聊天的运行时长)*60*1000);
        logd("取消文本库聊天线程 "+tid2);
        thread.cancelThread(tid2);
        sleep(1000)
        去漂流瓶()
    }


}
function 捡聊(txt) {


while (true){
    var tid =thread.execAsync(function() {
        while (true){
            logd("捡瓶子");
            捡瓶子手机版(txt)
            sleep(1000);
            if(thread.isCancelled(tid)){
                break;
            }
        }
    });
    logd("捡瓶子线程id "+tid);
    //取消捡瓶子线程
    sleep(parseInt(捡瓶子的运行时长)*60*1000);
    logd("取消捡瓶子线程");
    thread.cancelThread(tid);
    去消息列表()
    var tid2 =thread.execAsync(function() {
        while (true){
            文本库聊天()
            sleep(1000);
            if(thread.isCancelled(tid2)){
                break;
            }
        }
    });
    logd("文本库聊天线程id"+tid2);
    //取消自动聊天线程
    sleep(parseInt(自动聊天的运行时长)*60*1000);
    logd("取消文本库聊天线程 "+tid2);
    thread.cancelThread(tid2);
    sleep(1000)
    去漂流瓶()
}


}
function 文本库聊天() {
    while (true){
        waitMsg_local()
    }
}

function 捡瓶子模拟器版(context) {
    while (true){

        if (flag==1) {
            loge("检测到已发送过"+account+",跳过")
            flag=0
            sleep(1000)
            back();
            continue
        }
         findBootle_mnq(context)
}
}

function 捡瓶子手机版(txt) {

    while (true){
        随机();
        var context = 捡瓶子的回复+话术后缀;
        if (flag==1) {
            loge("检测到已发送过"+account+",跳过")
            flag=0
            sleep(1000)
            continue
        }
        findBottle(context)
    }
}
function 扔瓶子() {
    let i =0;
    let mark = readConfigString("mark")
    let sp = readConfigString("model")
    logd(sp)
    let marks= new Array();
    marks = mark.split("\n")
    for (let single of marks) {
        i++
        sleep(5000)
        logd("执行次数: " + i + " 当前内容：" + single);
        Start(single);
    }
}
function 扔瓶子手机版() {

}
function 自动聊天() {


    while (true){
        waitMsg()
    }
}


function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}



function Start(single) {
    if (initDriftBottle()) {
        sleep(parseInt(扔瓶子速度)*1000)
        随机();
        clickWrite(single);
    }
}
function 去漂流瓶() {
   if (has(id("com.xm.bottle:id/voice_input_switch"))) {
        back()
        sleep(1000)
       click(id("com.xm.bottle:id/tv_find"))
       sleep(1000)
       click(id("com.xm.bottle:id/tv_start_match"))
    }else {
       click(id("com.xm.bottle:id/tv_find"))
       sleep(1000)
       click(id("com.xm.bottle:id/tv_start_match"))

    }

}

function 去消息列表() {
    if (has(id("com.xm.bottle:id/dialog_bottle_set_esc"))) {
        clickText("取消")
        sleep(1000)
        back()
        sleep(1000)
        click(id("com.xm.bottle:id/tv_chat"))
    }else   if (has(id("com.xm.bottle:id/voice_input_switch"))) {
        back()
        sleep(1000)
        back()
        sleep(1000)
        click(id("com.xm.bottle:id/tv_chat"))
    }else {
        back()
        sleep(1000)
        click(id("com.xm.bottle:id/tv_chat"))
    }
}
function 随机() {
    var 随机下标 = random(0,后缀下标集合.length)
    logd("随机下标"+随机下标)
    logd("后缀下标集合"+后缀下标集合)
    logd("话术后缀"+后缀下标集合[随机下标])
    话术后缀=后缀下标集合[随机下标]
}
