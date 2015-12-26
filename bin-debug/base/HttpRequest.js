/*
 * 封闭Http Get请求的功能
 *
 */
var HttpServer = (function () {
    function HttpServer() {
    }
    var d = __define,c=HttpServer;p=c.prototype;
    // 设置服务器的URL(包含根目录)
    HttpServer.setHost = function (host) {
        HttpServer.host = host;
    };
    HttpServer.getHost = function () {
        return HttpServer.host;
    };
    return HttpServer;
})();
egret.registerClass(HttpServer,"HttpServer");
/*
 * 封装http消息收发的细节
 * @improve 待改善
 */
var HttpRequest = (function (_super) {
    __extends(HttpRequest, _super);
    function HttpRequest() {
        _super.apply(this, arguments);
    }
    var d = __define,c=HttpRequest;p=c.prototype;
    /*
     * 发送一个http请求
     * @param file 请求网页,比如**.php,(相对于服务器根目录)
     * @param action 请求的Action,一般表示操作的类型
     * @param param 请求所附带的参数,只能一级数据(使用对象是为了更方便通用的接口)
     */
    p.send = function (file, action, param) {
        var str = "";
        for (var k in param) {
            if (str != "") {
                str += '&';
            }
            str += k + '=' + param[k];
        }
        // 只能这样构造这个对象吗?
        var vari = new egret.URLVariables(str);
        var url = HttpServer.getHost() + '/' + file + "?Action=" + action;
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onHttpGetComplete, this);
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = vari;
        loader.load(request);
        console.log('HttpRequest send url=' + url);
    };
    p.onHttpGetComplete = function (event) {
        var loader = event.target;
        var objResult = eval('(' + loader.data + ')');
        egret.Event.dispatchEvent(this, egret.Event.COMPLETE, false, objResult);
        console.log('HttpRequest Receive data=' + loader.data.toString());
    };
    return HttpRequest;
})(egret.EventDispatcher);
egret.registerClass(HttpRequest,"HttpRequest");
