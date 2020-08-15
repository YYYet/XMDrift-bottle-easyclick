function  init() {
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
    let 自动聊天图片回复值 = readConfigBoolean("picautoReplayValue")

    let 自定义扔瓶子速度 =readConfigBoolean("giveUpOrNot")
    let 自定义扔瓶子速度值= readConfigBoolean("giveUpValue")

    let 自定义捡瓶子速度 =readConfigBoolean("getOrNot")
    let 自定义捡瓶子速度值= readConfigBoolean("getValue")

    let 全局话术后缀 =readConfigBoolean("diyAfter")
    let 全局话术后缀值= readConfigBoolean("after")

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
        话术后缀=全局话术后缀值
    }

}