 /*
  * 封闭Http Get请求的功能
  * 
  */

class HttpServer
{
    private static host: string;

    // 设置服务器的URL(包含根目录)
    public static setHost(host: string)
    {
        HttpServer.host = host;
    }

    public static getHost(): string
    {
        return HttpServer.host;
    }
}

/*
 * 封装http消息收发的细节
 * @improve 待改善
 */
class HttpRequest extends egret.EventDispatcher
{
    /*
     * 发送一个http请求
     * @param file 请求网页,比如**.php,(相对于服务器根目录)
     * @param action 请求的Action,一般表示操作的类型
     * @param param 请求所附带的参数,只能一级数据(使用对象是为了更方便通用的接口)
     */
	public send(file, action, param)
	{// 先拼出url
        var str = "";

        for(var k in param)
        {
            if(str != "")
            {
                str += '&';
            }

            str += k + '=' + param[k];
        }

        // 只能这样构造这个对象吗?
        var vari = new egret.URLVariables(str);

        var url = HttpServer.getHost() + '/' + file + "?Action=" + action;

        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        loader.addEventListener(egret.Event.COMPLETE, this.onHttpGetComplete, this);
        
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = vari;
        loader.load(request);

        console.log('HttpRequest send url=' + url);
	}

    private onHttpGetComplete(event:egret.Event): void {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;

        var objResult = eval('(' + loader.data + ')');

        egret.Event.dispatchEvent(this, egret.Event.COMPLETE, false, objResult);

        console.log('HttpRequest Receive data=' + loader.data.toString());
    }
}
