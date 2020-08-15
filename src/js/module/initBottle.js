function initDriftBottle() {

  /*  if (utils.openAppByName("星梦漂流瓶")) {
          toast("打开星梦漂流瓶")
    }else {
        toast("打开星梦漂流瓶失败")
    }*/
  var init = waitExistNode(id("com.xm.bottle:id/tv_write"),20000)
    if (init) {
        logd("已载入漂流瓶界面")
    } else {
        loge("未载入漂流瓶界面或漂流瓶软件界面发生改变，联系开发者进行更新修复")
    }
return init;
}