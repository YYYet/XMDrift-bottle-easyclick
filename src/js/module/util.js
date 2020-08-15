
/*滚动工具类
* by 小橙子*/

function 向后滚动() {
    var node = scrollable(true).getOneNodeInfo(500);
    var result2 = node.scrollBackward();
    if (result2) {
        toast("滚动成功");
    }else{
        toast("滚动失败");
    }
}
function 向前滚动() {
    var node = scrollable(true).getOneNodeInfo(500);
    var result2 = node.scrollForward();
    if (result2) {
        toast("滚动成功");
    }else{
        toast("滚动失败");
    }
}
//滚动检测
function upOrDown() {
    var selectors = clz("androidx.recyclerview.widget.RecyclerView");
    var result = isScrollEnd("DOWN",selectors);
    if (result){
        toast("触底检测");
   
        var selectors = clz("androidx.recyclerview.widget.RecyclerView");
        var result = isScrollEnd("UP",selectors);
        if (result) {
            向前滚动()
        }else {
            向后滚动()
        }

    } else {
        toast("触顶检测");
        向前滚动()
    }
}