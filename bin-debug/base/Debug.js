/*
 * 实现一些方便打log调试的接口
 *
 */
var Debug = (function () {
    function Debug() {
    }
    var d = __define,c=Debug;p=c.prototype;
    /*
     * 将Point转为string
     */
    Debug.ptStr = function (pt) {
        return '(' + pt.x + ', ' + pt.y + ')';
    };
    /*
     * 次数限制打印log
     * @param name log的名字
     * @param count log最多打印的次数
     * @param log log的类型
     */
    Debug.logCount = function (name, count, log) {
        var n = Debug.arrCount[name];
        if (!n) {
            Debug.arrCount[name] = 0;
        }
        else {
            if (n > count) {
                return;
            }
        }
        Debug.arrCount[name]++;
        console.log(log);
    };
    /*
     * 根据时间限制打印log
     * @param name log的名字
     * @param time 每个log打印的最短时间限制
     * @param log log的类型
     */
    Debug.logTime = function (name, time, log) {
        var now = egret.getTimer();
        var last = Debug.arrTime[name];
        if (last) {
            if (now - last < time) {
                return;
            }
        }
        Debug.arrTime[name] = now;
        console.log(log);
    };
    // 根据次数控制log
    Debug.arrCount = {};
    // 根据时间控制log
    Debug.arrTime = {};
    return Debug;
})();
egret.registerClass(Debug,"Debug");
